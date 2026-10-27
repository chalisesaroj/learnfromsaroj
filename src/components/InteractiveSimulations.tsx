import React, { useState, useMemo } from 'react';
import { MathRenderer } from './MathRenderer';
import {
  Sliders,
  Cpu,
  GitCommit,
  Zap,
  Activity,
  AlertTriangle,
  Layers,
  ArrowRight
} from 'lucide-react';

export const InteractiveSimulations: React.FC = () => {
  const [activeLab, setActiveLab] = useState<'adc' | 'calibration' | 'loading' | 'uncertainty' | 'strain_bridge' | 'flow_thermal' | 'system_dynamics'>('adc');

  // Lab 1: ADC State
  const [adcBits, setAdcBits] = useState(4); // 3 to 16
  const [adcFsr, setAdcFsr] = useState(5.0); // 1V to 10V
  const [freqFactor, setFreqFactor] = useState(1);

  // Lab 2: Calibration State
  const [calSensitivity, setCalSensitivity] = useState(1.0); // 0.5 to 2.0
  const [calZeroOffset, setCalZeroOffset] = useState(0.0); // -2 to +2
  const [calHysteresisWidth, setCalHysteresisWidth] = useState(4.0); // 0% to 10%

  // Lab 3: Loading Error State
  const [loadVs, setLoadVs] = useState(10.0); // 1 to 24V
  const [loadRsExp, setLoadRsExp] = useState(5); // 10^loadRsExp Ohms (e.g. 5 => 100k)
  const [loadRmPreset, setLoadRmPreset] = useState<'analog' | 'dmm' | 'electrometer'>('dmm');

  // Lab 4: Uncertainty State
  const [uncStdDev, setUncStdDev] = useState(0.12); // s
  const [uncSamples, setUncSamples] = useState(10); // N
  const [uncToleranceB1, setUncToleranceB1] = useState(0.05); // +/- a
  const [uncThermalB2, setUncThermalB2] = useState(0.04);
  const [uncCoverageK, setUncCoverageK] = useState(2); // k=1, 2, 3

  // Lab 5: Strain Gauge Bridge & Temperature Compensation State
  const [bridgeTopology, setBridgeTopology] = useState<'quarter' | 'half' | 'full'>('quarter');
  const [bridgeMicrostrain, setBridgeMicrostrain] = useState(800); // -2000 to +2000 με
  const [bridgeGF, setBridgeGF] = useState(2.05); // 1.8 to 2.4
  const [bridgeDeltaT, setBridgeDeltaT] = useState(20); // -30 to +60 °C
  const [bridgeCompensation, setBridgeCompensation] = useState<'none' | 'adjacent_dummy' | 'stc'>('none');
  const [bridgeVex, setBridgeVex] = useState(10.0); // 2 to 15 V

  // Lab 6: Flow Velocity & Thermocouple CJC State (Unit IV)
  const [pitotDeltaP, setPitotDeltaP] = useState(1450); // 100 to 5000 Pa
  const [ambientTemp, setAmbientTemp] = useState(20); // -20 to 50 °C
  const [baroPress, setBaroPress] = useState(101.325); // 80 to 110 kPa
  const [pitotCp, setPitotCp] = useState(0.99); // 0.95 to 1.05
  const [tcType, setTcType] = useState<'K' | 'J' | 'T'>('K');
  const [tcVmeas, setTcVmeas] = useState(16.48); // 1 to 50 mV
  const [tcRefTemp, setTcRefTemp] = useState(25); // 0 to 50 °C
  const [tcEnableCJC, setTcEnableCJC] = useState(true);

  // Lab 7: System Dynamics State (Unit V)
  const [dynSystemOrder, setDynSystemOrder] = useState<'zero' | 'first' | 'second'>('second');
  const [dynInputType, setDynInputType] = useState<'step' | 'ramp' | 'sinusoid'>('step');
  const [dynK, setDynK] = useState(1.0); // Static Sensitivity K
  const [dynTau, setDynTau] = useState(0.4); // Time Constant tau (seconds)
  const [dynWn, setDynWn] = useState(6.0); // Natural frequency wn (rad/s)
  const [dynZeta, setDynZeta] = useState(0.35); // Damping ratio zeta
  const [dynInputFreq, setDynInputFreq] = useState(3.0); // rad/s for sinusoidal input

  // ==================== LAB 1 CALCULATIONS ====================
  const adcCalculations = useMemo(() => {
    const totalLevels = Math.pow(2, adcBits);
    const lsbVoltage = adcFsr / (totalLevels - 1);
    const rmsQuantNoise = lsbVoltage / Math.sqrt(12);
    const theoreticalSnr = 6.02 * adcBits + 1.76;
    const dynamicRange = 6.02 * adcBits;

    // Generate waveforms for canvas SVG
    const numPoints = 120;
    const points = [];
    for (let i = 0; i < numPoints; i++) {
      const t = i / (numPoints - 1);
      // Sine wave between 0 and adcFsr
      const vIn = (adcFsr / 2) * Math.sin(2 * Math.PI * freqFactor * t) + (adcFsr / 2);
      // Quantize to nearest level
      const level = Math.min(totalLevels - 1, Math.max(0, Math.round(vIn / lsbVoltage)));
      const vQuant = level * lsbVoltage;
      const error = vQuant - vIn;
      points.push({ t, vIn, vQuant, error });
    }

    return {
      totalLevels,
      lsbVoltage,
      rmsQuantNoise,
      theoreticalSnr,
      dynamicRange,
      points
    };
  }, [adcBits, adcFsr, freqFactor]);

  // ==================== LAB 2 CALCULATIONS ====================
  const calCalculations = useMemo(() => {
    const fso = 100.0;
    const maxHystError = (calHysteresisWidth / 100) * (fso * calSensitivity);
    const percentHyst = calHysteresisWidth;

    const curvePoints = [];
    for (let x = 0; x <= 100; x += 5) {
      const ideal = calSensitivity * x + calZeroOffset;
      const hystOffset = maxHystError * Math.sin((Math.PI * x) / 100);
      const asc = ideal - hystOffset;
      const desc = ideal + hystOffset;
      curvePoints.push({ x, ideal, asc, desc });
    }

    return {
      fso,
      maxHystError,
      percentHyst,
      curvePoints
    };
  }, [calSensitivity, calZeroOffset, calHysteresisWidth]);

  // ==================== LAB 3 CALCULATIONS ====================
  const loadCalculations = useMemo(() => {
    const Rs = Math.pow(10, loadRsExp); // Ohms
    let Rm = 10e6; // Default 10 MOhms DMM
    if (loadRmPreset === 'analog') {
      Rm = 200e3; // 20k/V on 10V range = 200k Ohms
    } else if (loadRmPreset === 'electrometer') {
      Rm = 1e12; // 1 TeraOhm
    }

    const Vm = loadVs * (Rm / (Rs + Rm));
    const loadingError = ((Vm - loadVs) / loadVs) * 100; // in percent

    return {
      Rs,
      Rm,
      Vm,
      loadingError
    };
  }, [loadVs, loadRsExp, loadRmPreset]);

  // ==================== LAB 4 CALCULATIONS ====================
  const uncCalculations = useMemo(() => {
    // Type A: uA = s / sqrt(N)
    const uA = uncStdDev / Math.sqrt(uncSamples);
    // Type B1 (uniform): a / sqrt(3)
    const uB1 = uncToleranceB1 / Math.sqrt(3);
    // Type B2 (uniform): a / sqrt(3)
    const uB2 = uncThermalB2 / Math.sqrt(3);

    // Combined Standard Uncertainty (RSS): uc = sqrt(uA^2 + uB1^2 + uB2^2)
    const uc = Math.sqrt(Math.pow(uA, 2) + Math.pow(uB1, 2) + Math.pow(uB2, 2));
    const expandedU = uncCoverageK * uc;

    const confidenceLabel =
      uncCoverageK === 1 ? '68.27% (k=1)' : uncCoverageK === 2 ? '95.45% (k=2)' : '99.73% (k=3)';

    // Gaussian curve points
    const gaussPoints = [];
    const span = 4 * uc;
    const mean = 10.0; // Nominal reading
    for (let i = 0; i <= 60; i++) {
      const x = mean - span + (2 * span * i) / 60;
      const pdf = (1 / (uc * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / uc, 2));
      gaussPoints.push({ x, pdf });
    }

    return {
      uA,
      uB1,
      uB2,
      uc,
      expandedU,
      confidenceLabel,
      gaussPoints,
      mean
    };
  }, [uncStdDev, uncSamples, uncToleranceB1, uncThermalB2, uncCoverageK]);

  // ==================== LAB 5: STRAIN GAUGE BRIDGE & TEMP COMP CALCULATIONS ====================
  const strainBridgeCalculations = useMemo(() => {
    const R0 = 120.0;
    const eps = bridgeMicrostrain * 1e-6; // m/m
    const deltaR_mech = R0 * bridgeGF * eps;

    // Thermal apparent strain calculation
    // Steel substrate alpha_s = 12 ppm/°C, Constantan grid alpha_g = 15 ppm/°C, TCR beta = +70 ppm/°C
    const beta = 70e-6;
    const alphaDiff = (12 - 15) * 1e-6;
    const thermalFractionUncomp = (beta + bridgeGF * alphaDiff) * bridgeDeltaT;

    let effectiveThermalFraction = thermalFractionUncomp;
    if (bridgeCompensation === 'adjacent_dummy') {
      // Dummy gauge cancels thermal drift algebraically
      effectiveThermalFraction = 0;
    } else if (bridgeCompensation === 'stc') {
      // Metallurgically matched STC-13 reduces drift by >98%
      effectiveThermalFraction = thermalFractionUncomp * 0.015;
    }

    const deltaR_thermal = R0 * effectiveThermalFraction;
    const apparentMicrostrain = (effectiveThermalFraction / bridgeGF) * 1e6;

    let vOutExact = 0;
    let vOutLinear = 0;
    let sensitivityGain = '1×';
    let linearityErrorPercent = 0;

    if (bridgeTopology === 'quarter') {
      sensitivityGain = '1× (Quarter)';
      const dR = deltaR_mech + deltaR_thermal;
      const frac = dR / R0;
      vOutExact = bridgeVex * (frac / (4 + 2 * frac));
      vOutLinear = (bridgeVex / 4) * (bridgeGF * eps);
      linearityErrorPercent = Math.abs(bridgeMicrostrain) > 1 ? Math.abs((vOutExact - vOutLinear) / (vOutLinear || 1e-6)) * 100 : 0;
    } else if (bridgeTopology === 'half') {
      sensitivityGain = '2× (Half Bending)';
      const dR_m = deltaR_mech;
      vOutExact = (bridgeVex / 2) * (dR_m / R0);
      vOutLinear = (bridgeVex / 2) * (bridgeGF * eps);
      linearityErrorPercent = 0.0;
    } else {
      sensitivityGain = '4× (Full Bending)';
      const dR_m = deltaR_mech;
      vOutExact = bridgeVex * (dR_m / R0);
      vOutLinear = bridgeVex * (bridgeGF * eps);
      linearityErrorPercent = 0.0;
    }

    const divisor = bridgeVex * (bridgeTopology === 'quarter' ? 0.25 : bridgeTopology === 'half' ? 0.5 : 1.0) * bridgeGF;
    const indicatedMicrostrain = (vOutExact / (divisor || 1e-6)) * 1e6;

    return {
      R0,
      deltaR_mech,
      deltaR_thermal,
      apparentMicrostrain,
      vOutExactMv: vOutExact * 1000,
      vOutLinearMv: vOutLinear * 1000,
      sensitivityGain,
      linearityErrorPercent,
      indicatedMicrostrain
    };
  }, [bridgeTopology, bridgeMicrostrain, bridgeGF, bridgeDeltaT, bridgeCompensation, bridgeVex]);

  // ==================== LAB 6 CALCULATIONS ====================
  const flowThermalCalculations = useMemo(() => {
    // Air density from ideal gas law: P = rho * R * T
    const T_kelvin = ambientTemp + 273.15;
    const R_specific = 287.058; // J/(kg·K)
    const P_pascals = baroPress * 1000;
    const airDensity = P_pascals / (R_specific * T_kelvin);

    // Pitot-static velocity: v = Cp * sqrt(2 * DeltaP / rho)
    const rawVelocity = Math.sqrt((2 * Math.max(0, pitotDeltaP)) / airDensity);
    const trueAirspeedMs = pitotCp * rawVelocity;
    const trueAirspeedKmh = trueAirspeedMs * 3.6;

    // Speed of sound: c = sqrt(gamma * R * T), gamma = 1.4
    const speedOfSound = Math.sqrt(1.4 * R_specific * T_kelvin);
    const machNumber = trueAirspeedMs / speedOfSound;
    const dynamicPressure = 0.5 * airDensity * Math.pow(trueAirspeedMs, 2);

    // Thermocouple Sensitivity S (uV/°C)
    // Type K: 41.2, Type J: 51.5, Type T: 40.0
    const tcSensitivity = tcType === 'K' ? 41.2 : tcType === 'J' ? 51.5 : 40.0;
    const deltaT = (tcVmeas * 1000) / tcSensitivity; // °C

    const hotJunctionCompensated = tcRefTemp + deltaT;
    const hotJunctionUncompensated = deltaT;
    const indicatedTemp = tcEnableCJC ? hotJunctionCompensated : hotJunctionUncompensated;
    const cjcError = indicatedTemp - hotJunctionCompensated;

    return {
      airDensity,
      trueAirspeedMs,
      trueAirspeedKmh,
      machNumber,
      dynamicPressure,
      speedOfSound,
      tcSensitivity,
      deltaT,
      hotJunctionCompensated,
      indicatedTemp,
      cjcError
    };
  }, [pitotDeltaP, ambientTemp, baroPress, pitotCp, tcType, tcVmeas, tcRefTemp, tcEnableCJC]);

  // ==================== LAB 7 CALCULATIONS (UNIT V) ====================
  const dynCalculations = useMemo(() => {
    const tMax = dynInputType === 'ramp' ? 4.0 : dynInputType === 'sinusoid' ? 6.0 : 4.0;
    const numPoints = 150;
    const dt = tMax / (numPoints - 1);
    const times: number[] = [];
    const inputSignal: number[] = [];
    const outputSignal: number[] = [];

    // Second-order roots and parameters
    const r = dynInputFreq / (dynWn || 1e-4);
    let wd = 0;
    let beta = 0;
    let s1 = 0;
    let s2 = 0;
    let peakTime = 0;
    let overshootPercent = 0;
    let settlingTime2 = 0;
    let delayTime = 0;
    let riseTime = 0;
    let resonantPeakMr = 0;
    let resonantFreqW = 0;
    let harmonicMag = dynK;
    let harmonicPhaseDeg = 0;
    let rampTimeLag = 0;
    let rampDynamicError = 0;

    if (dynSystemOrder === 'zero') {
      delayTime = 0;
      riseTime = 0;
      peakTime = 0;
      overshootPercent = 0;
      settlingTime2 = 0;
      harmonicMag = dynK;
      harmonicPhaseDeg = 0;
      rampTimeLag = 0;
      rampDynamicError = 0;
    } else if (dynSystemOrder === 'first') {
      delayTime = dynTau * Math.LN2;
      riseTime = dynTau * 2.197; // ln(0.9/0.1)
      peakTime = 0;
      overshootPercent = 0;
      settlingTime2 = dynTau * 3.912;
      rampTimeLag = dynTau;
      rampDynamicError = dynK * dynTau;
      harmonicMag = dynK / Math.sqrt(1 + Math.pow(dynInputFreq * dynTau, 2));
      harmonicPhaseDeg = -(Math.atan(dynInputFreq * dynTau) * 180) / Math.PI;
    } else {
      // Second-order
      rampTimeLag = (2 * dynZeta) / dynWn;
      rampDynamicError = dynK * rampTimeLag;

      harmonicMag = dynK / Math.sqrt(Math.pow(1 - Math.pow(r, 2), 2) + Math.pow(2 * dynZeta * r, 2));
      harmonicPhaseDeg = -(Math.atan2(2 * dynZeta * r, 1 - Math.pow(r, 2)) * 180) / Math.PI;

      if (dynZeta < 0.7071) {
        resonantFreqW = dynWn * Math.sqrt(Math.max(0, 1 - 2 * Math.pow(dynZeta, 2)));
        resonantPeakMr = dynK / (2 * dynZeta * Math.sqrt(1 - Math.pow(dynZeta, 2)));
      }

      if (dynZeta === 0) {
        wd = dynWn;
        peakTime = Math.PI / dynWn;
        overshootPercent = 100;
        settlingTime2 = Infinity;
        delayTime = (Math.PI / 2) / dynWn;
        riseTime = (Math.PI / 2) / dynWn;
      } else if (dynZeta < 1.0) {
        wd = dynWn * Math.sqrt(1 - Math.pow(dynZeta, 2));
        beta = Math.acos(dynZeta);
        peakTime = Math.PI / wd;
        overshootPercent = Math.exp((-Math.PI * dynZeta) / Math.sqrt(1 - Math.pow(dynZeta, 2))) * 100;
        settlingTime2 = 4.0 / (dynZeta * dynWn);
        delayTime = (1 + 0.7 * dynZeta) / dynWn;
        riseTime = (Math.PI - beta) / wd;
      } else if (dynZeta === 1.0) {
        peakTime = 0;
        overshootPercent = 0;
        settlingTime2 = 5.8 / dynWn;
        delayTime = 1.67 / dynWn;
        riseTime = 3.36 / dynWn;
      } else {
        // Overdamped
        s1 = -dynZeta * dynWn + dynWn * Math.sqrt(Math.pow(dynZeta, 2) - 1);
        s2 = -dynZeta * dynWn - dynWn * Math.sqrt(Math.pow(dynZeta, 2) - 1);
        peakTime = 0;
        overshootPercent = 0;
        settlingTime2 = 4.0 / Math.abs(s1); // dominant pole
        delayTime = 2.0 / Math.abs(s1);
        riseTime = 4.0 / Math.abs(s1);
      }
    }

    // Generate time series
    for (let i = 0; i < numPoints; i++) {
      const t = i * dt;
      times.push(t);

      // Input x(t)
      let x = 0;
      if (dynInputType === 'step') {
        x = 1.0;
      } else if (dynInputType === 'ramp') {
        x = 1.0 * t;
      } else {
        x = Math.sin(dynInputFreq * t);
      }
      inputSignal.push(x);

      // Output y(t)
      let y = 0;
      if (dynSystemOrder === 'zero') {
        y = dynK * x;
      } else if (dynSystemOrder === 'first') {
        if (dynInputType === 'step') {
          y = dynK * (1 - Math.exp(-t / (dynTau || 1e-4)));
        } else if (dynInputType === 'ramp') {
          y = dynK * (t - dynTau + dynTau * Math.exp(-t / (dynTau || 1e-4)));
        } else {
          // Harmonic: transient + steady-state
          const phiRad = (harmonicPhaseDeg * Math.PI) / 180;
          const trCoeff = -(dynK * dynInputFreq * dynTau) / (1 + Math.pow(dynInputFreq * dynTau, 2));
          y = harmonicMag * Math.sin(dynInputFreq * t + phiRad) + trCoeff * Math.exp(-t / (dynTau || 1e-4));
        }
      } else {
        // Second-order
        if (dynInputType === 'step') {
          if (dynZeta === 0) {
            y = dynK * (1 - Math.cos(dynWn * t));
          } else if (dynZeta < 1.0) {
            y = dynK * (1 - (Math.exp(-dynZeta * dynWn * t) / Math.sqrt(1 - Math.pow(dynZeta, 2))) * Math.sin(wd * t + beta));
          } else if (dynZeta === 1.0) {
            y = dynK * (1 - (1 + dynWn * t) * Math.exp(-dynWn * t));
          } else {
            y = dynK * (1 - (s2 * Math.exp(s1 * t) - s1 * Math.exp(s2 * t)) / (s2 - s1));
          }
        } else if (dynInputType === 'ramp') {
          const lag = (2 * dynZeta) / dynWn;
          if (dynZeta < 1.0) {
            const tr = (Math.exp(-dynZeta * dynWn * t) / wd) * Math.sin(wd * t + 2 * beta);
            y = dynK * (t - lag + (1 / dynWn) * tr);
          } else {
            y = dynK * (t - lag * (1 - Math.exp(-dynWn * t)));
          }
        } else {
          // Harmonic sinusoid
          const phiRad = (harmonicPhaseDeg * Math.PI) / 180;
          y = harmonicMag * Math.sin(dynInputFreq * t + phiRad);
        }
      }
      outputSignal.push(y);
    }

    return {
      tMax,
      times,
      inputSignal,
      outputSignal,
      delayTime,
      riseTime,
      peakTime,
      overshootPercent,
      settlingTime2,
      rampTimeLag,
      rampDynamicError,
      harmonicMag,
      harmonicPhaseDeg,
      resonantPeakMr,
      resonantFreqW,
      frequencyRatioR: r
    };
  }, [dynSystemOrder, dynInputType, dynK, dynTau, dynWn, dynZeta, dynInputFreq]);

  return (
    <div className="space-y-6">
      {/* Simulation Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          <span className="font-semibold text-sm text-white">
            Interactive Engineering Simulation Labs
          </span>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 flex-wrap">
          <button
            onClick={() => setActiveLab('adc')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeLab === 'adc'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            1. ADC Quantization &amp; SNR
          </button>
          <button
            onClick={() => setActiveLab('calibration')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeLab === 'calibration'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            2. Calibration &amp; Hysteresis
          </button>
          <button
            onClick={() => setActiveLab('loading')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeLab === 'loading'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            3. Circuit Loading Error
          </button>
          <button
            onClick={() => setActiveLab('uncertainty')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeLab === 'uncertainty'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            4. ISO GUM Uncertainty
          </button>
          <button
            onClick={() => setActiveLab('strain_bridge')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeLab === 'strain_bridge'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            5. Strain Gauge Bridge (Unit III)
          </button>
          <button
            onClick={() => setActiveLab('flow_thermal')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeLab === 'flow_thermal'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            6. Pitot Flow &amp; Thermocouple CJC (Unit IV)
          </button>
          <button
            onClick={() => setActiveLab('system_dynamics')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeLab === 'system_dynamics'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            7. Dynamic Response (Unit V)
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* LAB 1: ADC QUANTIZATION & SNR SIMULATOR */}
      {/* ========================================================================= */}
      {activeLab === 'adc' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-4 p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-5">
            <div>
              <span className="text-xs uppercase font-semibold text-cyan-400">
                Topic 1.2 &amp; 1.5 Lab
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                ADC Quantization &amp; SNR
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Explore the relationship between bit resolution <MathRenderer math="N" />, LSB step size, quantization error bound, and theoretical dynamic range.
              </p>
            </div>

            {/* Slider 1: ADC Bit Depth */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Resolution (N Bits):</span>
                <span className="font-mono text-cyan-400 font-semibold">{adcBits} Bits ({Math.pow(2, adcBits).toLocaleString()} levels)</span>
              </div>
              <input
                type="range"
                min={3}
                max={24}
                step={1}
                value={adcBits}
                onChange={(e) => setAdcBits(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
              <div className="flex items-center gap-1.5 flex-wrap pt-1">
                <button
                  type="button"
                  onClick={() => setAdcBits(8)}
                  className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                    adcBits === 8 ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  8-Bit MCU
                </button>
                <button
                  type="button"
                  onClick={() => setAdcBits(12)}
                  className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                    adcBits === 12 ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  12-Bit Lab
                </button>
                <button
                  type="button"
                  onClick={() => setAdcBits(16)}
                  className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                    adcBits === 16 ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  16-Bit Ind.
                </button>
                <button
                  type="button"
                  onClick={() => setAdcBits(24)}
                  className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                    adcBits === 24 ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-emerald-400 hover:bg-slate-700'
                  }`}
                >
                  24-Bit Dewesoft
                </button>
              </div>
            </div>

            {/* Slider 2: Full Scale Voltage */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Full Scale Range (VFSR):</span>
                <span className="font-mono text-amber-400 font-semibold">{adcFsr.toFixed(1)} Volts</span>
              </div>
              <input
                type="range"
                min={1.0}
                max={10.0}
                step={0.5}
                value={adcFsr}
                onChange={(e) => setAdcFsr(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
            </div>

            {/* Slider 3: Input Frequency */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Input Cycles:</span>
                <span className="font-mono text-emerald-400 font-semibold">{freqFactor}x</span>
              </div>
              <input
                type="range"
                min={1}
                max={3}
                step={1}
                value={freqFactor}
                onChange={(e) => setFreqFactor(Number(e.target.value))}
                className="w-full accent-emerald-400 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase text-slate-400 block">LSB Step (ΔV)</span>
                <span className="font-mono text-sm font-semibold text-cyan-400">
                  {adcCalculations.lsbVoltage < 0.001
                    ? `${(adcCalculations.lsbVoltage * 1e6).toFixed(2)} µV`
                    : adcCalculations.lsbVoltage < 1.0
                    ? `${(adcCalculations.lsbVoltage * 1000).toFixed(2)} mV`
                    : `${adcCalculations.lsbVoltage.toFixed(3)} V`}
                </span>
              </div>
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase text-slate-400 block">RMS Quant Noise</span>
                <span className="font-mono text-sm font-semibold text-amber-400">
                  {adcCalculations.rmsQuantNoise < 0.001
                    ? `${(adcCalculations.rmsQuantNoise * 1e6).toFixed(2)} µV`
                    : `${(adcCalculations.rmsQuantNoise * 1000).toFixed(2)} mV`}
                </span>
              </div>
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase text-slate-400 block">Theoretical SNR</span>
                <span className="font-mono text-sm font-semibold text-emerald-400">
                  {adcCalculations.theoreticalSnr.toFixed(2)} dB
                </span>
              </div>
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase text-slate-400 block">Dynamic Range</span>
                <span className="font-mono text-sm font-semibold text-purple-400">
                  {adcCalculations.dynamicRange.toFixed(1)} dB
                </span>
              </div>
            </div>

            <div className="p-3 bg-slate-950/80 rounded border border-slate-800 text-xs text-slate-400 font-mono">
              SNR = 6.02 · {adcBits} + 1.76 = {adcCalculations.theoreticalSnr.toFixed(2)} dB
            </div>
          </div>

          {/* Visualization Stage */}
          <div className="lg:col-span-8 p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-white">
                  Real-Time Waveform &amp; Quantization Error
                </h4>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-0.5 bg-cyan-400 inline-block" /> Analog Vin(t)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-0.5 bg-amber-400 inline-block" /> Quantized Vq(t)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-0.5 bg-rose-400 inline-block" /> Error eq(t)
                  </span>
                </div>
              </div>

              {/* Waveform SVG Plot */}
              <div className="h-64 w-full bg-slate-950 rounded-lg p-2 border border-slate-800 relative">
                <svg viewBox="0 0 500 220" className="w-full h-full">
                  {/* Grid Lines */}
                  <line x1="40" y1="20" x2="40" y2="180" stroke="#334155" strokeWidth="1" />
                  <line x1="40" y1="180" x2="480" y2="180" stroke="#334155" strokeWidth="1" />
                  <line x1="40" y1="100" x2="480" y2="100" stroke="#1e293b" strokeDasharray="3,3" />

                  {/* Analog Sine Wave (Cyan) */}
                  <path
                    d={adcCalculations.points.reduce((acc, p, i) => {
                      const x = 40 + p.t * 440;
                      const y = 180 - (p.vIn / adcFsr) * 150;
                      return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }, '')}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                  />

                  {/* Quantized Staircase (Amber) */}
                  <path
                    d={adcCalculations.points.reduce((acc, p, i) => {
                      const x = 40 + p.t * 440;
                      const y = 180 - (p.vQuant / adcFsr) * 150;
                      return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }, '')}
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                  />

                  {/* Quantization Error Curve at bottom (Rose) */}
                  <line x1="40" y1="205" x2="480" y2="205" stroke="#334155" strokeWidth="0.8" />
                  <path
                    d={adcCalculations.points.reduce((acc, p, i) => {
                      const x = 40 + p.t * 440;
                      // Max error is +/- 0.5 LSB
                      const normalizedErr = p.error / (adcCalculations.lsbVoltage || 1);
                      const y = 205 - normalizedErr * 10;
                      return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }, '')}
                    fill="none"
                    stroke="#f43f5e"
                    strokeWidth="1.2"
                  />
                  <text x="45" y="200" fill="#f43f5e" fontSize="8" fontFamily="monospace">
                    eq(t) = ±0.5 LSB
                  </text>

                  {/* Y-Axis Labels */}
                  <text x="35" y="30" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="monospace">
                    {adcFsr.toFixed(1)}V
                  </text>
                  <text x="35" y="105" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="monospace">
                    {(adcFsr / 2).toFixed(1)}V
                  </text>
                  <text x="35" y="180" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="monospace">
                    0V
                  </text>
                </svg>
              </div>
            </div>

            {/* Classroom Pedagogical Callout */}
            <div className="mt-4 p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
              <strong className="text-cyan-400 block mb-1">Key Takeaway for Engineering Students:</strong>
              Each additional bit of ADC resolution doubles the quantization grid density, cuts quantization step <MathRenderer math="\Delta V" /> in half, and raises SNR by exactly <span className="font-mono text-emerald-400 font-bold">+6.02 dB</span>.
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LAB 2: CALIBRATION & HYSTERESIS SIMULATOR */}
      {/* ========================================================================= */}
      {activeLab === 'calibration' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-5">
            <div>
              <span className="text-xs uppercase font-semibold text-amber-400">
                Topic 1.4 Lab
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Calibration &amp; Hysteresis
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Simulate static sensitivity slope <MathRenderer math="S = dy/dx" />, zero offset drift, and ascending versus descending hysteresis loops.
              </p>
            </div>

            {/* Slider 1: Sensitivity */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Static Sensitivity (S = dy/dx):</span>
                <span className="font-mono text-cyan-400 font-semibold">{calSensitivity.toFixed(2)} V/bar</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={1.8}
                step={0.05}
                value={calSensitivity}
                onChange={(e) => setCalSensitivity(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
            </div>

            {/* Slider 2: Zero Offset Drift */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Zero Offset (Δy0):</span>
                <span className="font-mono text-amber-400 font-semibold">{calZeroOffset.toFixed(1)} V</span>
              </div>
              <input
                type="range"
                min={-15}
                max={15}
                step={1}
                value={calZeroOffset}
                onChange={(e) => setCalZeroOffset(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
            </div>

            {/* Slider 3: Hysteresis Loop Width */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Hysteresis Width (% FSO):</span>
                <span className="font-mono text-rose-400 font-semibold">{calHysteresisWidth.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min={0.0}
                max={10.0}
                step={0.5}
                value={calHysteresisWidth}
                onChange={(e) => setCalHysteresisWidth(Number(e.target.value))}
                className="w-full accent-rose-400 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
            </div>

            {/* Calibration Stats */}
            <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Span Output at 100%:</span>
                <span className="font-mono text-white">{(100 * calSensitivity + calZeroOffset).toFixed(1)} V</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Max Hysteresis Error:</span>
                <span className="font-mono text-rose-400 font-bold">{calCalculations.maxHystError.toFixed(2)} V</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Class Specification:</span>
                <span className="font-mono text-amber-400">±{calHysteresisWidth.toFixed(1)}% FSO</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-white">
                  Loading (Ascending) vs. Unloading (Descending) Calibration Response
                </h4>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-0.5 bg-slate-400 inline-block border border-dashed" /> Ideal Linear
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-0.5 bg-emerald-400 inline-block" /> Ascending (Loading)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-0.5 bg-rose-400 inline-block" /> Descending (Unloading)
                  </span>
                </div>
              </div>

              {/* Curve SVG */}
              <div className="h-64 w-full bg-slate-950 rounded-lg p-2 border border-slate-800 relative">
                <svg viewBox="0 0 500 220" className="w-full h-full">
                  <line x1="50" y1="20" x2="50" y2="180" stroke="#334155" strokeWidth="1" />
                  <line x1="50" y1="180" x2="480" y2="180" stroke="#334155" strokeWidth="1" />

                  {/* Ideal linear dash line */}
                  <line
                    x1="50"
                    y1={180 - (calZeroOffset / 200) * 160}
                    x2="480"
                    y2={180 - ((100 * calSensitivity + calZeroOffset) / 200) * 160}
                    stroke="#94a3b8"
                    strokeDasharray="4,4"
                    strokeWidth="1.5"
                  />

                  {/* Ascending Path (Green) */}
                  <path
                    d={calCalculations.curvePoints.reduce((acc, p, i) => {
                      const x = 50 + (p.x / 100) * 430;
                      const y = 180 - (p.asc / 200) * 160;
                      return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }, '')}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                  />

                  {/* Descending Path (Rose) */}
                  <path
                    d={calCalculations.curvePoints.reduce((acc, p, i) => {
                      const x = 50 + (p.x / 100) * 430;
                      const y = 180 - (p.desc / 200) * 160;
                      return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }, '')}
                    fill="none"
                    stroke="#f43f5e"
                    strokeWidth="2.5"
                  />

                  {/* Max Hysteresis Arrow at 50% Input */}
                  {calHysteresisWidth > 0 && (
                    <g>
                      <line
                        x1="265"
                        y1={180 - (calCalculations.curvePoints[10].asc / 200) * 160}
                        x2="265"
                        y2={180 - (calCalculations.curvePoints[10].desc / 200) * 160}
                        stroke="#fbbf24"
                        strokeWidth="2.5"
                      />
                      <circle cx="265" cy={180 - (calCalculations.curvePoints[10].asc / 200) * 160} r="3" fill="#10b981" />
                      <circle cx="265" cy={180 - (calCalculations.curvePoints[10].desc / 200) * 160} r="3" fill="#f43f5e" />
                      <text x="275" y="100" fill="#fbbf24" fontSize="10" fontFamily="monospace">
                        Δy_hyst = {calCalculations.maxHystError.toFixed(2)}V
                      </text>
                    </g>
                  )}

                  <text x="260" y="200" fill="#94a3b8" fontSize="10" textAnchor="middle">
                    Standard Measurand Input x (0 to 100% Full Scale) →
                  </text>
                </svg>
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
              <strong className="text-amber-400 block mb-1">Metrology Insight:</strong>
              Hysteresis is caused by physical memory effects (e.g. magnetic hysteresis in LVDTs, mechanical backlash in dial gears, molecular elasticity in diaphragms). Calibration protocols must mandate both ascending and descending test runs.
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LAB 3: CIRCUIT LOADING ERROR CALCULATOR */}
      {/* ========================================================================= */}
      {activeLab === 'loading' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-5">
            <div>
              <span className="text-xs uppercase font-semibold text-rose-400">
                Topic 1.6 &amp; 1.2 Lab
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Voltmeter Circuit Loading Error
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Observe how an intrusive measurement instrument alters the actual operating voltage of the circuit under test through impedance loading.
              </p>
            </div>

            {/* Source Voltage */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">True Thevenin Source Voltage (Vs):</span>
                <span className="font-mono text-cyan-400 font-semibold">{loadVs.toFixed(1)} V</span>
              </div>
              <input
                type="range"
                min={1}
                max={24}
                step={1}
                value={loadVs}
                onChange={(e) => setLoadVs(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
            </div>

            {/* Source Resistance Rs */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Circuit Source Resistance (Rs):</span>
                <span className="font-mono text-amber-400 font-semibold">
                  {loadCalculations.Rs >= 1e6
                    ? `${(loadCalculations.Rs / 1e6).toFixed(1)} MΩ`
                    : `${(loadCalculations.Rs / 1e3).toFixed(1)} kΩ`}
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={7}
                step={0.5}
                value={loadRsExp}
                onChange={(e) => setLoadRsExp(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>1 kΩ</span>
                <span>100 kΩ</span>
                <span>10 MΩ</span>
              </div>
            </div>

            {/* Instrument Preset Selector */}
            <div className="space-y-2">
              <span className="text-xs text-slate-300 font-medium block">Meter Type / Input Impedance (Rm):</span>
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => setLoadRmPreset('analog')}
                  className={`p-2.5 rounded-lg text-left text-xs border transition-colors ${
                    loadRmPreset === 'analog'
                      ? 'border-rose-500 bg-rose-950/30 text-white font-medium'
                      : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="font-semibold text-rose-300">Analog Moving Coil (PMMC)</div>
                  <div className="text-[11px] text-slate-400">Rm = 200 kΩ (20 kΩ/V sensitivity)</div>
                </button>
                <button
                  onClick={() => setLoadRmPreset('dmm')}
                  className={`p-2.5 rounded-lg text-left text-xs border transition-colors ${
                    loadRmPreset === 'dmm'
                      ? 'border-indigo-500 bg-indigo-950/30 text-white font-medium'
                      : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="font-semibold text-indigo-300">Standard Benchtop DMM</div>
                  <div className="text-[11px] text-slate-400">Rm = 10 MΩ (Standard input divider)</div>
                </button>
                <button
                  onClick={() => setLoadRmPreset('electrometer')}
                  className={`p-2.5 rounded-lg text-left text-xs border transition-colors ${
                    loadRmPreset === 'electrometer'
                      ? 'border-emerald-500 bg-emerald-950/30 text-white font-medium'
                      : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="font-semibold text-emerald-300">FET Electrometer / Buffer</div>
                  <div className="text-[11px] text-slate-400">Rm = 1 TΩ (10¹² Ω negligible loading)</div>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            {/* Live Calculation Output Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-xs uppercase text-slate-400 block mb-1">True Open Voltage</span>
                <span className="font-mono text-xl font-bold text-cyan-400">{loadVs.toFixed(2)} V</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-xs uppercase text-slate-400 block mb-1">Measured Voltage (Vm)</span>
                <span className="font-mono text-xl font-bold text-white">
                  {loadCalculations.Vm.toFixed(3)} V
                </span>
              </div>
              <div className={`p-4 rounded-lg border ${
                Math.abs(loadCalculations.loadingError) > 5 ? 'bg-rose-950/20 border-rose-800/40' : 'bg-emerald-950/20 border-emerald-800/40'
              }`}>
                <span className="text-xs uppercase text-slate-400 block mb-1">Loading Error</span>
                <span className={`font-mono text-xl font-bold ${
                  Math.abs(loadCalculations.loadingError) > 5 ? 'text-rose-400' : 'text-emerald-400'
                }`}>
                  {loadCalculations.loadingError.toFixed(2)}%
                </span>
              </div>
            </div>

            {/* Circuit Diagram SVG */}
            <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
              <svg viewBox="0 0 500 150" className="w-full h-36">
                {/* Circuit loop */}
                <rect x="40" y="25" width="200" height="100" fill="none" stroke="#475569" strokeWidth="2" />
                
                {/* Voltage source Vs */}
                <circle cx="40" cy="75" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                <text x="40" y="80" fill="#38bdf8" fontSize="12" textAnchor="middle" fontFamily="monospace">Vs</text>

                {/* Rs resistor */}
                <rect x="120" y="15" width="45" height="20" fill="#0f172a" stroke="#fbbf24" strokeWidth="2" />
                <text x="142" y="48" fill="#fbbf24" fontSize="11" textAnchor="middle" fontFamily="monospace">Rs</text>

                {/* Measurement nodes */}
                <circle cx="240" cy="25" r="4" fill="#f8fafc" />
                <circle cx="240" cy="125" r="4" fill="#f8fafc" />

                {/* Parallel meter Rm connection */}
                <line x1="240" y1="25" x2="360" y2="25" stroke="#f43f5e" strokeWidth="2" />
                <line x1="240" y1="125" x2="360" y2="125" stroke="#f43f5e" strokeWidth="2" />

                {/* Meter Vm */}
                <circle cx="360" cy="75" r="22" fill="#0f172a" stroke="#f43f5e" strokeWidth="2" />
                <text x="360" y="80" fill="#f43f5e" fontSize="14" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Vm</text>
                <line x1="360" y1="25" x2="360" y2="53" stroke="#f43f5e" strokeWidth="2" />
                <line x1="360" y1="97" x2="360" y2="125" stroke="#f43f5e" strokeWidth="2" />

                <text x="410" y="80" fill="#cbd5e1" fontSize="11" fontFamily="monospace">
                  Rm = {loadRmPreset === 'analog' ? '200 kΩ' : loadRmPreset === 'dmm' ? '10 MΩ' : '1 TΩ'}
                </text>
              </svg>
            </div>

            <div className="mt-4 p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
              <strong className="text-rose-400 block mb-1">Intrusive Loading Formula:</strong>
              <div className="font-mono text-slate-200 mb-1">
                Vm = Vs · [Rm / (Rs + Rm)]  ⟹  Loading Error = -Rs / (Rs + Rm)
              </div>
              Notice that even with a <MathRenderer math="10\text{ M}\Omega" /> digital multimeter, measuring a <MathRenderer math="5\text{ M}\Omega" /> high-impedance divider introduces an unacceptable <span className="text-rose-400 font-bold">-33.3% loading error</span>!
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LAB 4: ISO GUM UNCERTAINTY BUDGET */}
      {/* ========================================================================= */}
      {activeLab === 'uncertainty' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
            <div>
              <span className="text-xs uppercase font-semibold text-emerald-400">
                Topic 1.5 Lab
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                ISO GUM Uncertainty Budget
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Combine statistical Type A repeated observations with non-statistical Type B tolerance specifications using Root-Sum-Square (RSS) propagation.
              </p>
            </div>

            {/* Type A: Sample std dev and count */}
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-cyan-300 block">Type A Evaluation (Repeatability):</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <label className="text-slate-400 block mb-1">Sample Std Dev (s):</label>
                  <input
                    type="number"
                    step="0.01"
                    value={uncStdDev}
                    onChange={(e) => setUncStdDev(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Sample Count (N):</label>
                  <input
                    type="number"
                    min="2"
                    max="100"
                    value={uncSamples}
                    onChange={(e) => setUncSamples(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono"
                  />
                </div>
              </div>
              <div className="text-[11px] font-mono text-cyan-400">
                u_A = s / √N = {(uncStdDev / Math.sqrt(uncSamples)).toFixed(4)}
              </div>
            </div>

            {/* Type B1: Calibration certificate tolerance */}
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-amber-300 block">Type B1: Sensor Calibration Certificate</span>
              <div className="text-xs">
                <label className="text-slate-400 block mb-1">Manufacturer Tolerance (±a, uniform distribution):</label>
                <input
                  type="number"
                  step="0.01"
                  value={uncToleranceB1}
                  onChange={(e) => setUncToleranceB1(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono"
                />
              </div>
              <div className="text-[11px] font-mono text-amber-400">
                u_B1 = a / √3 = {(uncToleranceB1 / Math.sqrt(3)).toFixed(4)}
              </div>
            </div>

            {/* Type B2: Thermal ambient drift */}
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-purple-300 block">Type B2: Ambient Temperature Drift</span>
              <div className="text-xs">
                <label className="text-slate-400 block mb-1">Thermal Uncertainty Bound (±a):</label>
                <input
                  type="number"
                  step="0.01"
                  value={uncThermalB2}
                  onChange={(e) => setUncThermalB2(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono"
                />
              </div>
              <div className="text-[11px] font-mono text-purple-400">
                u_B2 = a / √3 = {(uncThermalB2 / Math.sqrt(3)).toFixed(4)}
              </div>
            </div>

            {/* Coverage Factor k */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Coverage Factor (k):</span>
                <span className="font-mono text-emerald-400 font-semibold">{uncCalculations.confidenceLabel}</span>
              </div>
              <input
                type="range"
                min={1}
                max={3}
                step={1}
                value={uncCoverageK}
                onChange={(e) => setUncCoverageK(Number(e.target.value))}
                className="w-full accent-emerald-400 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            {/* Uncertainty Summary KPI */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-xs uppercase text-slate-400 block mb-0.5">Combined Standard (uc)</span>
                <span className="font-mono text-lg font-bold text-white">
                  ±{uncCalculations.uc.toFixed(4)}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Root-Sum-Square GUM</span>
              </div>
              <div className="p-3.5 rounded-lg bg-emerald-950/30 border border-emerald-800/40">
                <span className="text-xs uppercase text-slate-400 block mb-0.5">Expanded Uncertainty (U)</span>
                <span className="font-mono text-lg font-bold text-emerald-400">
                  ±{uncCalculations.expandedU.toFixed(4)}
                </span>
                <span className="text-[10px] text-emerald-300 block mt-0.5">{uncCalculations.confidenceLabel}</span>
              </div>
            </div>

            {/* Gaussian Bell Curve */}
            <div className="h-56 w-full bg-slate-950 rounded-lg p-2 border border-slate-800 relative">
              <svg viewBox="0 0 500 180" className="w-full h-full">
                {/* Horizontal baseline */}
                <line x1="30" y1="160" x2="470" y2="160" stroke="#334155" strokeWidth="1" />
                <line x1="250" y1="20" x2="250" y2="160" stroke="#475569" strokeDasharray="3,3" />

                {/* Shaded confidence region */}
                <path
                  d={uncCalculations.gaussPoints.reduce((acc, p, i) => {
                    const x = 30 + (i / 60) * 440;
                    const y = 160 - p.pdf * 120;
                    return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }, '') + ' L 470 160 L 30 160 Z'}
                  fill="#0284c7"
                  fillOpacity="0.25"
                />

                {/* Bell curve line */}
                <path
                  d={uncCalculations.gaussPoints.reduce((acc, p, i) => {
                    const x = 30 + (i / 60) * 440;
                    const y = 160 - p.pdf * 120;
                    return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }, '')}
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                />

                {/* Mean marker */}
                <text x="250" y="175" fill="#f8fafc" fontSize="11" textAnchor="middle" fontFamily="monospace">
                  Nominal Mean μ = 10.000
                </text>

                {/* Expanded Uncertainty Bounds */}
                <line x1="180" y1="100" x2="320" y2="100" stroke="#10b981" strokeWidth="2" />
                <circle cx="180" cy="100" r="3" fill="#10b981" />
                <circle cx="320" cy="100" r="3" fill="#10b981" />
                <text x="250" y="90" fill="#34d399" fontSize="10" textAnchor="middle" fontFamily="monospace">
                  ±U = ±{uncCalculations.expandedU.toFixed(4)} ({uncCalculations.confidenceLabel})
                </text>
              </svg>
            </div>

            <div className="mt-4 p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
              <strong className="text-emerald-400 block mb-1">Standard Reporting Format:</strong>
              <div className="font-mono text-slate-100">
                Reported Value = (10.000 ± {uncCalculations.expandedU.toFixed(4)}) [Coverage k={uncCoverageK}, {uncCalculations.confidenceLabel}]
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LAB 5: STRAIN GAUGE WHEATSTONE BRIDGE & TEMP COMPENSATION SIMULATOR */}
      {/* ========================================================================= */}
      {activeLab === 'strain_bridge' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-semibold text-amber-400">
                  Unit III · Sections 3.3 &amp; 3.4
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40">
                  Live Hardware Lab
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-1">
                Wheatstone Bridge &amp; Thermal Drift Lab
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Interactively evaluate bridge topology multipliers (1×, 2×, 4×), verify non-linearity cancellation in bending, and test algebraic adjacent-arm vs STC temperature compensation.
              </p>
            </div>

            {/* Bridge Topology Selector */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-300 font-medium block">
                Bridge Topology &amp; Active Gauge Placement:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setBridgeTopology('quarter')}
                  className={`p-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                    bridgeTopology === 'quarter'
                      ? 'bg-amber-600/30 border-amber-500 text-amber-200 shadow-sm'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold">Quarter (1×)</div>
                  <div className="text-[10px] font-normal opacity-80">1 Active Gauge</div>
                </button>
                <button
                  onClick={() => setBridgeTopology('half')}
                  className={`p-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                    bridgeTopology === 'half'
                      ? 'bg-amber-600/30 border-amber-500 text-amber-200 shadow-sm'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold">Half (2×)</div>
                  <div className="text-[10px] font-normal opacity-80">±ε Bending Pair</div>
                </button>
                <button
                  onClick={() => setBridgeTopology('full')}
                  className={`p-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                    bridgeTopology === 'full'
                      ? 'bg-amber-600/30 border-amber-500 text-amber-200 shadow-sm'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold">Full (4×)</div>
                  <div className="text-[10px] font-normal opacity-80">4 Active Gauges</div>
                </button>
              </div>
            </div>

            {/* Slider 1: Mechanical Strain */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Applied Mechanical Strain (ε):</span>
                <span className={`font-mono font-semibold ${bridgeMicrostrain >= 0 ? 'text-amber-400' : 'text-cyan-400'}`}>
                  {bridgeMicrostrain > 0 ? `+${bridgeMicrostrain}` : bridgeMicrostrain} με ({bridgeMicrostrain >= 0 ? 'Tension' : 'Compression'})
                </span>
              </div>
              <input
                type="range"
                min={-2000}
                max={2000}
                step={50}
                value={bridgeMicrostrain}
                onChange={(e) => setBridgeMicrostrain(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>-2000 με</span>
                <span>0 με</span>
                <span>+2000 με</span>
              </div>
            </div>

            {/* Slider 2: Gauge Factor */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Gauge Factor (GF):</span>
                <span className="font-mono text-cyan-400 font-semibold">{bridgeGF.toFixed(2)} (Constantan Foil)</span>
              </div>
              <input
                type="range"
                min={1.80}
                max={2.40}
                step={0.01}
                value={bridgeGF}
                onChange={(e) => setBridgeGF(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
              />
            </div>

            {/* Slider 3: Ambient Temperature Change ΔT */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Ambient Temperature Shift (ΔT):</span>
                <span className="font-mono text-rose-400 font-semibold">
                  {bridgeDeltaT > 0 ? `+${bridgeDeltaT}` : bridgeDeltaT} °C (Base: 20°C)
                </span>
              </div>
              <input
                type="range"
                min={-30}
                max={60}
                step={1}
                value={bridgeDeltaT}
                onChange={(e) => setBridgeDeltaT(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>-30 °C</span>
                <span>0 °C (Calibrated)</span>
                <span>+60 °C (Industrial Heat)</span>
              </div>
            </div>

            {/* Temperature Compensation Technique */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-300 font-medium block">
                Thermal Drift Mitigation Technique:
              </label>
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => setBridgeCompensation('none')}
                  className={`p-2.5 rounded-lg text-xs font-semibold text-left border flex items-center justify-between transition-all ${
                    bridgeCompensation === 'none'
                      ? 'bg-rose-950/40 border-rose-600 text-rose-200'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="font-bold">1. None (Raw Uncompensated)</div>
                    <div className="text-[10px] font-normal opacity-80 text-rose-300">Severe thermal apparent strain; drifts by hundreds of microstrain.</div>
                  </div>
                  {bridgeCompensation === 'none' && <span className="text-[10px] px-2 py-0.5 rounded bg-rose-600 text-white font-mono">Active</span>}
                </button>
                <button
                  onClick={() => setBridgeCompensation('adjacent_dummy')}
                  className={`p-2.5 rounded-lg text-xs font-semibold text-left border flex items-center justify-between transition-all ${
                    bridgeCompensation === 'adjacent_dummy'
                      ? 'bg-emerald-950/40 border-emerald-600 text-emerald-200'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="font-bold">2. Adjacent Arm Dummy Gauge (Sec 3.4.1)</div>
                    <div className="text-[10px] font-normal opacity-80 text-emerald-300">Unstressed dummy block in adjacent arm; cancels ΔRT algebraically.</div>
                  </div>
                  {bridgeCompensation === 'adjacent_dummy' && <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-600 text-white font-mono">Active</span>}
                </button>
                <button
                  onClick={() => setBridgeCompensation('stc')}
                  className={`p-2.5 rounded-lg text-xs font-semibold text-left border flex items-center justify-between transition-all ${
                    bridgeCompensation === 'stc'
                      ? 'bg-indigo-950/40 border-indigo-600 text-indigo-200'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="font-bold">3. Self-Temperature Compensated STC-13 (Sec 3.4.2)</div>
                    <div className="text-[10px] font-normal opacity-80 text-indigo-300">Metallurgically tuned TCR β ≈ -GF(αs - αg); minimizes drift to &lt;±5 με.</div>
                  </div>
                  {bridgeCompensation === 'stc' && <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-600 text-white font-mono">Active</span>}
                </button>
              </div>
            </div>

            {/* Slider 4: Excitation Voltage */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Bridge Excitation (VEX):</span>
                <span className="font-mono text-emerald-400 font-semibold">{bridgeVex.toFixed(1)} V DC</span>
              </div>
              <input
                type="range"
                min={2.0}
                max={15.0}
                step={0.5}
                value={bridgeVex}
                onChange={(e) => setBridgeVex(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
              />
            </div>
          </div>

          {/* Visualization & Live Readout Column */}
          <div className="lg:col-span-7 space-y-5">
            {/* Real-Time Measurement Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block font-medium">Differential Output (V0):</span>
                <span className="text-xl font-bold font-mono text-amber-400">
                  {strainBridgeCalculations.vOutExactMv.toFixed(3)} mV
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5 font-mono">
                  Gain: {strainBridgeCalculations.sensitivityGain}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block font-medium">Apparent Thermal Strain:</span>
                <span className={`text-xl font-bold font-mono ${Math.abs(strainBridgeCalculations.apparentMicrostrain) < 1 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {strainBridgeCalculations.apparentMicrostrain > 0 ? `+${strainBridgeCalculations.apparentMicrostrain.toFixed(1)}` : strainBridgeCalculations.apparentMicrostrain.toFixed(1)} με
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  {bridgeCompensation === 'none' ? 'Parasitic Error!' : 'Compensated'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block font-medium">Indicated Strain:</span>
                <span className="text-xl font-bold font-mono text-indigo-300">
                  {strainBridgeCalculations.indicatedMicrostrain.toFixed(1)} με
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  Applied: {bridgeMicrostrain} με
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block font-medium">Linearity Error:</span>
                <span className={`text-xl font-bold font-mono ${strainBridgeCalculations.linearityErrorPercent === 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {strainBridgeCalculations.linearityErrorPercent.toFixed(3)}%
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5 font-mono">
                  {bridgeTopology === 'quarter' ? 'Denominator term' : 'Perfect cancellation'}
                </span>
              </div>
            </div>

            {/* Interactive Vector Wheatstone Bridge Schematic Canvas */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-slate-200">
                  Wheatstone Diamond Topography (Live Node Potentials)
                </span>
                <span className="font-mono text-cyan-400 text-[11px]">
                  R0 = 120.000 Ω · Constantan Alloy
                </span>
              </div>

              <svg viewBox="0 0 600 360" className="w-full h-auto bg-slate-950 rounded-lg border border-slate-800">
                {/* Excitation Node A (Top, +VEX) */}
                <circle cx="300" cy="40" r="8" fill="#10b981" />
                <text x="300" y="25" fill="#34d399" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="monospace">
                  Node A (+{bridgeVex.toFixed(1)}V DC)
                </text>

                {/* Ground Node C (Bottom, 0V) */}
                <circle cx="300" cy="320" r="8" fill="#64748b" />
                <text x="300" y="345" fill="#94a3b8" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="monospace">
                  Node C (0.000V GND)
                </text>

                {/* Left Node B */}
                <circle cx="120" cy="180" r="8" fill="#f59e0b" />
                <text x="50" y="185" fill="#fbbf24" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="monospace">
                  Node B
                </text>

                {/* Right Node D */}
                <circle cx="480" cy="180" r="8" fill="#38bdf8" />
                <text x="550" y="185" fill="#38bdf8" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="monospace">
                  Node D
                </text>

                {/* Connecting Arms */}
                {/* Arm 1: Top-Left (Node A to Node B) -> R1 */}
                <line x1="300" y1="40" x2="120" y2="180" stroke="#f59e0b" strokeWidth="3" />
                <rect x="180" y="90" width="85" height="38" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                <text x="222" y="106" fill="#fbbf24" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">
                  R1: Active
                </text>
                <text x="222" y="121" fill="#f8fafc" fontSize="10" textAnchor="middle" fontFamily="monospace">
                  {(120 + strainBridgeCalculations.deltaR_mech + strainBridgeCalculations.deltaR_thermal).toFixed(3)} Ω
                </text>

                {/* Arm 2: Bottom-Left (Node B to Node C) -> R2 */}
                <line x1="120" y1="180" x2="300" y2="320" stroke={bridgeCompensation === 'adjacent_dummy' ? '#10b981' : bridgeTopology !== 'quarter' ? '#f59e0b' : '#64748b'} strokeWidth="3" />
                <rect x="180" y="235" width="85" height="38" rx="6" fill="#1e293b" stroke={bridgeCompensation === 'adjacent_dummy' ? '#10b981' : bridgeTopology !== 'quarter' ? '#f59e0b' : '#64748b'} strokeWidth="2" />
                <text x="222" y="251" fill={bridgeCompensation === 'adjacent_dummy' ? '#34d399' : bridgeTopology !== 'quarter' ? '#fbbf24' : '#94a3b8'} fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">
                  {bridgeCompensation === 'adjacent_dummy' ? 'R2: Dummy' : bridgeTopology !== 'quarter' ? 'R2: Active (-ε)' : 'R2: Fixed'}
                </text>
                <text x="222" y="266" fill="#f8fafc" fontSize="10" textAnchor="middle" fontFamily="monospace">
                  {bridgeCompensation === 'adjacent_dummy'
                    ? (120 + strainBridgeCalculations.deltaR_thermal).toFixed(3)
                    : bridgeTopology !== 'quarter'
                    ? (120 - strainBridgeCalculations.deltaR_mech + strainBridgeCalculations.deltaR_thermal).toFixed(3)
                    : '120.000'} Ω
                </text>

                {/* Arm 4: Top-Right (Node A to Node D) -> R4 */}
                <line x1="300" y1="40" x2="480" y2="180" stroke={bridgeTopology === 'full' ? '#f59e0b' : '#64748b'} strokeWidth="3" />
                <rect x="335" y="90" width="85" height="38" rx="6" fill="#1e293b" stroke={bridgeTopology === 'full' ? '#f59e0b' : '#64748b'} strokeWidth="2" />
                <text x="377" y="106" fill={bridgeTopology === 'full' ? '#fbbf24' : '#94a3b8'} fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">
                  {bridgeTopology === 'full' ? 'R4: Active (-ε)' : 'R4: Fixed'}
                </text>
                <text x="377" y="121" fill="#f8fafc" fontSize="10" textAnchor="middle" fontFamily="monospace">
                  {bridgeTopology === 'full' ? (120 - strainBridgeCalculations.deltaR_mech + strainBridgeCalculations.deltaR_thermal).toFixed(3) : '120.000'} Ω
                </text>

                {/* Arm 3: Bottom-Right (Node D to Node C) -> R3 */}
                <line x1="480" y1="180" x2="300" y2="320" stroke={bridgeTopology === 'full' ? '#f59e0b' : '#64748b'} strokeWidth="3" />
                <rect x="335" y="235" width="85" height="38" rx="6" fill="#1e293b" stroke={bridgeTopology === 'full' ? '#f59e0b' : '#64748b'} strokeWidth="2" />
                <text x="377" y="251" fill={bridgeTopology === 'full' ? '#fbbf24' : '#94a3b8'} fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">
                  {bridgeTopology === 'full' ? 'R3: Active (+ε)' : 'R3: Fixed'}
                </text>
                <text x="377" y="266" fill="#f8fafc" fontSize="10" textAnchor="middle" fontFamily="monospace">
                  {bridgeTopology === 'full' ? (120 + strainBridgeCalculations.deltaR_mech + strainBridgeCalculations.deltaR_thermal).toFixed(3) : '120.000'} Ω
                </text>

                {/* Center Galvanometer / Instrumentation Amp Meter */}
                <line x1="120" y1="180" x2="250" y2="180" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" />
                <line x1="350" y1="180" x2="480" y2="180" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" />
                <circle cx="300" cy="180" r="42" fill="#0f172a" stroke="#6366f1" strokeWidth="2.5" />
                <text x="300" y="172" fill="#a5b4fc" fontSize="10" textAnchor="middle" fontFamily="system-ui">
                  ΔV0 Output
                </text>
                <text x="300" y="192" fill="#ffffff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="monospace">
                  {strainBridgeCalculations.vOutExactMv.toFixed(3)} mV
                </text>
              </svg>
            </div>

            {/* Pedagogical Principle Callout Card */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Unit III Core Mathematical Proof:</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Notice that in the <strong>Quarter Bridge</strong>, the uncompensated thermal drift generates a false indicated strain of <code className="text-rose-300">{strainBridgeCalculations.apparentMicrostrain.toFixed(1)} με</code>.
                When you activate <strong>Adjacent Arm Dummy Balancing</strong>, the dummy gauge experiences identical thermal resistance change <code className="text-emerald-300">ΔRT</code> in arm R2. Because adjacent arms subtract in the bridge divider equation, <code className="text-emerald-300">(ΔR1 - ΔR2) = (ΔRmech + ΔRT) - ΔRT = ΔRmech</code>, completely removing the thermal error!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LAB 6: FLOW & THERMAL TRANSDUCER SIMULATOR (UNIT IV) */}
      {/* ========================================================================= */}
      {activeLab === 'flow_thermal' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-5">
            <div>
              <span className="text-xs uppercase font-semibold text-cyan-400">
                Unit IV · Section 4.3.1 &amp; 4.4 Lab
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Pitot Airspeed &amp; Thermocouple CJC
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Investigate aerodynamic flow velocity via Bernoulli stagnation pressure alongside Seebeck thermoelectric loops and Cold Junction Compensation (CJC).
              </p>
            </div>

            {/* Sub-Section 1: Pitot Probe Aerodynamics */}
            <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/90 space-y-3">
              <span className="text-xs font-semibold text-blue-400 block uppercase tracking-wide">
                1. Aerodynamic Pitot-Static Probe
              </span>

              {/* Slider: Differential Pressure */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">Dynamic Pressure (ΔP):</span>
                  <span className="font-mono text-cyan-400 font-semibold">{pitotDeltaP} Pa</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={5000}
                  step={50}
                  value={pitotDeltaP}
                  onChange={(e) => setPitotDeltaP(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
              </div>

              {/* Slider: Ambient Temperature */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">Ambient Air Temp (T_air):</span>
                  <span className="font-mono text-amber-400 font-semibold">{ambientTemp} °C</span>
                </div>
                <input
                  type="range"
                  min={-20}
                  max={50}
                  step={1}
                  value={ambientTemp}
                  onChange={(e) => setAmbientTemp(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
              </div>

              {/* Slider: Barometric Pressure */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">Barometric Pressure:</span>
                  <span className="font-mono text-indigo-400 font-semibold">{baroPress.toFixed(1)} kPa</span>
                </div>
                <input
                  type="range"
                  min={80}
                  max={110}
                  step={0.5}
                  value={baroPress}
                  onChange={(e) => setBaroPress(Number(e.target.value))}
                  className="w-full accent-indigo-400 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
              </div>

              {/* Slider: Probe Factor Cp */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">Probe Calibration Factor (Cp):</span>
                  <span className="font-mono text-emerald-400 font-semibold">{pitotCp.toFixed(3)}</span>
                </div>
                <input
                  type="range"
                  min={0.95}
                  max={1.05}
                  step={0.005}
                  value={pitotCp}
                  onChange={(e) => setPitotCp(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
              </div>
            </div>

            {/* Sub-Section 2: Thermocouple & CJC */}
            <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/90 space-y-3">
              <span className="text-xs font-semibold text-rose-400 block uppercase tracking-wide">
                2. Thermocouple &amp; Cold Junction (CJC)
              </span>

              {/* TC Calibration Selector */}
              <div className="space-y-1.5">
                <label className="text-xs text-slate-300 font-medium">Thermocouple Type:</label>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    onClick={() => setTcType('K')}
                    className={`py-1 text-xs rounded font-semibold transition-all ${
                      tcType === 'K'
                        ? 'bg-rose-600 text-white shadow'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    Type K (41.2 μV)
                  </button>
                  <button
                    onClick={() => setTcType('J')}
                    className={`py-1 text-xs rounded font-semibold transition-all ${
                      tcType === 'J'
                        ? 'bg-rose-600 text-white shadow'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    Type J (51.5 μV)
                  </button>
                  <button
                    onClick={() => setTcType('T')}
                    className={`py-1 text-xs rounded font-semibold transition-all ${
                      tcType === 'T'
                        ? 'bg-rose-600 text-white shadow'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    Type T (40.0 μV)
                  </button>
                </div>
              </div>

              {/* Slider: Measured Seebeck Voltage */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">Measured Voltage (V_meas):</span>
                  <span className="font-mono text-purple-400 font-semibold">{tcVmeas.toFixed(2)} mV</span>
                </div>
                <input
                  type="range"
                  min={1.0}
                  max={45.0}
                  step={0.5}
                  value={tcVmeas}
                  onChange={(e) => setTcVmeas(Number(e.target.value))}
                  className="w-full accent-purple-400 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
              </div>

              {/* Slider: Cold Junction Reference Temp */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">Terminal Block Temp (T_ref):</span>
                  <span className="font-mono text-amber-400 font-semibold">{tcRefTemp} °C</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={50}
                  step={1}
                  value={tcRefTemp}
                  onChange={(e) => setTcRefTemp(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
              </div>

              {/* Toggle: CJC Enabled */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-slate-300 font-medium">Cold Junction Compensation (CJC):</span>
                <button
                  onClick={() => setTcEnableCJC(!tcEnableCJC)}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                    tcEnableCJC
                      ? 'bg-emerald-600 text-white shadow'
                      : 'bg-rose-950 text-rose-300 border border-rose-800'
                  }`}
                >
                  {tcEnableCJC ? 'CJC Active (Compensated)' : 'CJC OFF (Uncompensated)'}
                </button>
              </div>
            </div>
          </div>

          {/* Visualization Stage */}
          <div className="lg:col-span-7 space-y-4">
            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase text-slate-400 block">Air Density (ρ)</span>
                <span className="font-mono text-base font-semibold text-cyan-400">
                  {flowThermalCalculations.airDensity.toFixed(3)} kg/m³
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase text-slate-400 block">True Airspeed (v)</span>
                <span className="font-mono text-base font-semibold text-emerald-400">
                  {flowThermalCalculations.trueAirspeedMs.toFixed(2)} m/s
                </span>
                <span className="text-[10px] text-slate-400 block font-mono">
                  {flowThermalCalculations.trueAirspeedKmh.toFixed(1)} km/h
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase text-slate-400 block">Mach Number (M)</span>
                <span className="font-mono text-base font-semibold text-indigo-400">
                  M {flowThermalCalculations.machNumber.toFixed(3)}
                </span>
                <span className="text-[10px] text-slate-400 block font-mono">
                  c = {flowThermalCalculations.speedOfSound.toFixed(1)} m/s
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase text-slate-400 block">Indicated Temp</span>
                <span className={`font-mono text-base font-semibold ${tcEnableCJC ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {flowThermalCalculations.indicatedTemp.toFixed(1)} °C
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase text-slate-400 block">True Hot Junction</span>
                <span className="font-mono text-base font-semibold text-amber-400">
                  {flowThermalCalculations.hotJunctionCompensated.toFixed(1)} °C
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase text-slate-400 block">CJC Error</span>
                <span className={`font-mono text-base font-semibold ${tcEnableCJC ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {tcEnableCJC ? '0.0 °C (Compensated)' : `-${flowThermalCalculations.cjcError.toFixed(1)} °C`}
                </span>
              </div>
            </div>

            {/* Graphic Schematic Canvas */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Simulated Transducer Physics &amp; Signal Interface
              </h4>

              <svg viewBox="0 0 700 320" className="w-full h-auto bg-slate-950 rounded-lg border border-slate-800">
                {/* Upper: Pitot Probe */}
                <rect x="20" y="15" width="660" height="135" rx="6" fill="#0f172a" stroke="#1e293b" />
                <text x="35" y="35" fill="#38bdf8" fontSize="11" fontWeight="700">
                  Pitot-Static Tube · v = Cp · sqrt(2·ΔP / ρ)
                </text>

                {/* Flow arrows */}
                <line x1="40" y1="75" x2="160" y2="75" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6,3" />
                <line x1="40" y1="95" x2="140" y2="95" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6,3" />
                <line x1="40" y1="115" x2="160" y2="115" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6,3" />
                <text x="40" y="60" fill="#94a3b8" fontSize="10">
                  Flow: {flowThermalCalculations.trueAirspeedMs.toFixed(1)} m/s ({flowThermalCalculations.trueAirspeedKmh.toFixed(0)} km/h)
                </text>

                {/* Probe geometry */}
                <path d="M 170 85 L 340 85 L 340 50" fill="none" stroke="#64748b" strokeWidth="6" />
                <path d="M 170 105 L 340 105 L 340 135" fill="none" stroke="#64748b" strokeWidth="6" />
                <path d="M 150 95 L 420 95 L 420 50" fill="none" stroke="#ef4444" strokeWidth="4" />
                <circle cx="150" cy="95" r="4" fill="#ef4444" />
                <text x="135" y="125" fill="#ef4444" fontSize="10" fontWeight="700">Stagnation Pt</text>

                {/* Static ports */}
                <circle cx="230" cy="82" r="2.5" fill="#0284c7" />
                <circle cx="230" cy="108" r="2.5" fill="#0284c7" />
                <text x="215" y="70" fill="#0284c7" fontSize="9">Static Port</text>

                {/* Differential transmitter box */}
                <rect x="400" y="45" width="260" height="75" rx="6" fill="#1e293b" stroke="#334155" />
                <text x="415" y="68" fill="#e2e8f0" fontSize="11" fontWeight="700">Differential Pressure (ΔP):</text>
                <text x="415" y="90" fill="#38bdf8" fontSize="16" fontWeight="700" fontFamily="monospace">
                  {pitotDeltaP} Pa ({ (pitotDeltaP / 1000).toFixed(2) } kPa)
                </text>
                <text x="415" y="108" fill="#94a3b8" fontSize="10">
                  Dynamic Head q = 0.5·ρ·v² = {flowThermalCalculations.dynamicPressure.toFixed(1)} Pa
                </text>

                {/* Lower: Thermocouple Loop */}
                <rect x="20" y="165" width="660" height="140" rx="6" fill="#0f172a" stroke="#1e293b" />
                <text x="35" y="185" fill="#f43f5e" fontSize="11" fontWeight="700">
                  Thermocouple Seebeck Loop &amp; Cold Junction Block (CJC)
                </text>

                {/* Furnace bead */}
                <circle cx="80" cy="245" r="12" fill="#ef4444" />
                <text x="80" y="275" fill="#f87171" fontSize="10" textAnchor="middle" fontWeight="700">
                  Hot Junction
                </text>
                <text x="80" y="290" fill="#fbbf24" fontSize="11" textAnchor="middle" fontWeight="700" fontFamily="monospace">
                  {flowThermalCalculations.hotJunctionCompensated.toFixed(1)} °C
                </text>

                {/* Wire A (Chromel) */}
                <path d="M 80 245 C 150 215, 230 215, 300 230" fill="none" stroke="#3b82f6" strokeWidth="3" />
                <text x="180" y="215" fill="#60a5fa" fontSize="9" fontWeight="600">Conductor A (e.g. Chromel)</text>

                {/* Wire B (Alumel) */}
                <path d="M 80 245 C 150 275, 230 275, 300 260" fill="none" stroke="#f97316" strokeWidth="3" />
                <text x="180" y="285" fill="#fb923c" fontSize="9" fontWeight="600">Conductor B (e.g. Alumel)</text>

                {/* Isothermal CJC block */}
                <rect x="300" y="215" width="130" height="60" rx="4" fill="#365314" stroke="#65a30d" />
                <text x="365" y="235" fill="#bef264" fontSize="10" textAnchor="middle" fontWeight="700">
                  CJC Block (T_ref)
                </text>
                <text x="365" y="255" fill="#ffffff" fontSize="12" textAnchor="middle" fontWeight="700" fontFamily="monospace">
                  {tcRefTemp} °C
                </text>

                {/* DAQ Voltmeter */}
                <circle cx="560" cy="245" r="30" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
                <text x="560" y="240" fill="#a5b4fc" fontSize="9" textAnchor="middle">Measured EMF</text>
                <text x="560" y="258" fill="#ffffff" fontSize="13" textAnchor="middle" fontWeight="700" fontFamily="monospace">
                  {tcVmeas.toFixed(2)} mV
                </text>
                <line x1="430" y1="230" x2="530" y2="240" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="430" y1="260" x2="530" y2="250" stroke="#94a3b8" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Pedagogical Principle Callout Card */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Unit IV Core Mathematical Principles:</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                1. <strong>Pitot Airspeed:</strong> Notice how dynamic pressure <code className="text-cyan-300">ΔP = {pitotDeltaP} Pa</code> relates non-linearly to velocity <code className="text-emerald-300">v = {flowThermalCalculations.trueAirspeedMs.toFixed(1)} m/s</code> via the square root. Because air density <code className="text-cyan-300">ρ = {flowThermalCalculations.airDensity.toFixed(3)} kg/m³</code> drops with rising temperature and altitude, failing to measure ambient temperature causes significant indicated airspeed errors.
              </p>
              <p className="text-slate-300 leading-relaxed">
                2. <strong>Thermocouple CJC:</strong> When you switch <strong>CJC OFF</strong>, the indicated temperature drops from <code className="text-emerald-300">{flowThermalCalculations.hotJunctionCompensated.toFixed(1)} °C</code> to <code className="text-rose-300">{flowThermalCalculations.indicatedTemp.toFixed(1)} °C</code>—a systematic error equal to exactly <code className="text-rose-300">-{tcRefTemp} °C</code>! Thermocouples only measure the <em>temperature difference</em> between hot and cold junctions; an isothermal reference sensor is mandatory to compute absolute furnace temperature.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LAB 7: DYNAMIC SYSTEM RESPONSE SIMULATOR (UNIT V) */}
      {/* ========================================================================= */}
      {activeLab === 'system_dynamics' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-5">
            {/* System Configuration Box */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  1. Model Order &amp; Input Excitation
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  Unit V · Sec 5.3-5.6
                </span>
              </div>

              {/* Order Selection */}
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1.5">
                  Mathematical System Order:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setDynSystemOrder('zero')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      dynSystemOrder === 'zero'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    Zero-Order (0th)
                  </button>
                  <button
                    onClick={() => setDynSystemOrder('first')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      dynSystemOrder === 'first'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    First-Order (1st)
                  </button>
                  <button
                    onClick={() => setDynSystemOrder('second')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      dynSystemOrder === 'second'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    Second-Order (2nd)
                  </button>
                </div>
              </div>

              {/* Input Type */}
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1.5">
                  Input Measurand Signal x(t):
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setDynInputType('step')}
                    className={`py-2 px-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                      dynInputType === 'step'
                        ? 'bg-sky-600 border-sky-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    Step: u(t)
                  </button>
                  <button
                    onClick={() => setDynInputType('ramp')}
                    className={`py-2 px-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                      dynInputType === 'ramp'
                        ? 'bg-sky-600 border-sky-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    Ramp: R·t
                  </button>
                  <button
                    onClick={() => setDynInputType('sinusoid')}
                    className={`py-2 px-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                      dynInputType === 'sinusoid'
                        ? 'bg-sky-600 border-sky-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    Sine: sin(ωt)
                  </button>
                </div>
              </div>

              {/* Static Sensitivity K Slider */}
              <div className="pt-2 border-t border-slate-800">
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Static Sensitivity (K):</span>
                  <span className="font-mono text-cyan-400 font-bold">{dynK.toFixed(2)} [Output/Input]</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3.0"
                  step="0.1"
                  value={dynK}
                  onChange={(e) => setDynK(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
              </div>

              {/* First-Order Parameter: Time Constant Tau */}
              {dynSystemOrder === 'first' && (
                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-800/40 space-y-2">
                  <div className="flex justify-between text-xs text-purple-200">
                    <span className="font-semibold">Time Constant (τ = mc / hA):</span>
                    <span className="font-mono text-purple-300 font-bold">{dynTau.toFixed(2)} seconds</span>
                  </div>
                  <input
                    type="range"
                    min="0.05"
                    max="1.5"
                    step="0.05"
                    value={dynTau}
                    onChange={(e) => setDynTau(parseFloat(e.target.value))}
                    className="w-full accent-purple-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-purple-300/70">
                    <span>Fast (0.05s, bare wire)</span>
                    <span>Slow (1.5s, thermowell)</span>
                  </div>
                </div>
              )}

              {/* Second-Order Parameters: Natural Frequency & Damping Ratio */}
              {dynSystemOrder === 'second' && (
                <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-800/40 space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-rose-200 mb-1">
                      <span className="font-semibold">Undamped Natural Frequency (ωn):</span>
                      <span className="font-mono text-rose-300 font-bold">{dynWn.toFixed(1)} rad/s ({(dynWn / (2 * Math.PI)).toFixed(2)} Hz)</span>
                    </div>
                    <input
                      type="range"
                      min="2.0"
                      max="15.0"
                      step="0.5"
                      value={dynWn}
                      onChange={(e) => setDynWn(parseFloat(e.target.value))}
                      className="w-full accent-rose-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-rose-200 mb-1">
                      <span className="font-semibold">Damping Ratio (ζ = c / 2√(km)):</span>
                      <span className="font-mono text-rose-300 font-bold">
                        {dynZeta.toFixed(2)}{' '}
                        {dynZeta === 0 ? '(Undamped)' : dynZeta < 1 ? '(Underdamped)' : dynZeta === 1 ? '(Critical)' : '(Overdamped)'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0.0"
                      max="2.0"
                      step="0.05"
                      value={dynZeta}
                      onChange={(e) => setDynZeta(parseFloat(e.target.value))}
                      className="w-full accent-rose-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                    />
                    {/* Quick Presets */}
                    <div className="grid grid-cols-4 gap-1 mt-2">
                      <button
                        onClick={() => setDynZeta(0.0)}
                        className="text-[10px] py-1 px-1 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
                      >
                        ζ = 0 (Osc)
                      </button>
                      <button
                        onClick={() => setDynZeta(0.25)}
                        className="text-[10px] py-1 px-1 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
                      >
                        ζ = 0.25
                      </button>
                      <button
                        onClick={() => setDynZeta(0.707)}
                        className="text-[10px] py-1 px-1 rounded bg-emerald-950 border border-emerald-700 text-emerald-300 font-bold"
                      >
                        ζ = 0.707 (Opt)
                      </button>
                      <button
                        onClick={() => setDynZeta(1.0)}
                        className="text-[10px] py-1 px-1 rounded bg-amber-950 border border-amber-700 text-amber-300 font-bold"
                      >
                        ζ = 1.0 (Crit)
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Harmonic Frequency Slider (if sinusoidal) */}
              {dynInputType === 'sinusoid' && (
                <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 space-y-2">
                  <div className="flex justify-between text-xs text-cyan-200">
                    <span className="font-semibold">Excitation Frequency (ω):</span>
                    <span className="font-mono text-cyan-300 font-bold">{dynInputFreq.toFixed(1)} rad/s ({(dynInputFreq / (2 * Math.PI)).toFixed(2)} Hz)</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="15.0"
                    step="0.5"
                    value={dynInputFreq}
                    onChange={(e) => setDynInputFreq(parseFloat(e.target.value))}
                    className="w-full accent-cyan-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-cyan-300/70">
                    <span>Frequency Ratio r = ω/ωn:</span>
                    <span className="font-mono font-bold">{dynCalculations.frequencyRatioR.toFixed(2)}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Real-Time Quantitative Metrics Card */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Analytical Dynamic Parameters (Calculated):
              </span>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 text-[11px] block">Delay Time (td, 50%):</span>
                  <span className="font-mono font-bold text-sky-400 text-sm">
                    {dynCalculations.delayTime > 0 ? `${dynCalculations.delayTime.toFixed(3)} s` : '0.000 s (Instant)'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 text-[11px] block">Rise Time (tr):</span>
                  <span className="font-mono font-bold text-purple-400 text-sm">
                    {dynCalculations.riseTime > 0 ? `${dynCalculations.riseTime.toFixed(3)} s` : '0.000 s'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 text-[11px] block">Max Overshoot (Mp):</span>
                  <span className={`font-mono font-bold text-sm ${dynCalculations.overshootPercent > 0 ? 'text-rose-400' : 'text-slate-400'}`}>
                    {dynCalculations.overshootPercent > 0 ? `${dynCalculations.overshootPercent.toFixed(1)}%` : '0.0% (Monotonic)'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 text-[11px] block">Settling Time (ts, ±2%):</span>
                  <span className="font-mono font-bold text-emerald-400 text-sm">
                    {isFinite(dynCalculations.settlingTime2) ? `${dynCalculations.settlingTime2.toFixed(3)} s` : '∞ (Undamped)'}
                  </span>
                </div>

                {dynInputType === 'ramp' && (
                  <>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                      <span className="text-slate-400 text-[11px] block">Time Lag (Δt):</span>
                      <span className="font-mono font-bold text-amber-400 text-sm">
                        {dynCalculations.rampTimeLag.toFixed(3)} s
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                      <span className="text-slate-400 text-[11px] block">Steady Dynamic Error (ess):</span>
                      <span className="font-mono font-bold text-rose-400 text-sm">
                        {dynCalculations.rampDynamicError.toFixed(3)} units
                      </span>
                    </div>
                  </>
                )}

                {dynInputType === 'sinusoid' && (
                  <>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                      <span className="text-slate-400 text-[11px] block">Magnitude Ratio |M(ω)|:</span>
                      <span className="font-mono font-bold text-cyan-400 text-sm">
                        {dynCalculations.harmonicMag.toFixed(3)} ({(20 * Math.log10(dynCalculations.harmonicMag || 1e-4)).toFixed(1)} dB)
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                      <span className="text-slate-400 text-[11px] block">Phase Lag φ(ω):</span>
                      <span className="font-mono font-bold text-emerald-400 text-sm">
                        {dynCalculations.harmonicPhaseDeg.toFixed(1)}°
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Visualization Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Dynamic Response Waveform: Input x(t) vs. Output y(t)
                  </h3>
                  <p className="text-xs text-slate-400">
                    Real-time solution of internal differential equation across 0 to {dynCalculations.tMax} seconds
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <span className="w-3 h-0.5 border-t-2 border-dashed border-slate-400 inline-block" />
                    Input x(t)
                  </span>
                  <span className="flex items-center gap-1.5 text-indigo-400 font-bold">
                    <span className="w-3 h-1 bg-indigo-500 rounded inline-block" />
                    Output y(t)
                  </span>
                </div>
              </div>

              {/* Dynamic Waveform SVG */}
              <div className="w-full bg-slate-950 rounded-xl p-3 border border-slate-800">
                <svg viewBox="0 0 700 360" className="w-full h-auto">
                  {/* Background grid */}
                  <line x1="60" y1="40" x2="660" y2="40" stroke="#1e293b" strokeWidth="1" />
                  <line x1="60" y1="110" x2="660" y2="110" stroke="#1e293b" strokeWidth="1" />
                  <line x1="60" y1="180" x2="660" y2="180" stroke="#1e293b" strokeWidth="1" />
                  <line x1="60" y1="250" x2="660" y2="250" stroke="#1e293b" strokeWidth="1" />
                  <line x1="60" y1="310" x2="660" y2="310" stroke="#334155" strokeWidth="2" />
                  <line x1="60" y1="310" x2="60" y2="30" stroke="#334155" strokeWidth="2" />

                  {/* Settling corridor for step response */}
                  {dynInputType === 'step' && (
                    <>
                      {/* 2% band around y_ss */}
                      {(() => {
                        const ySs = dynK;
                        const yPixels = 310 - (ySs / 2.5) * 250;
                        const bandHeight = (0.04 * ySs / 2.5) * 250;
                        return (
                          <rect
                            x="60"
                            y={yPixels - bandHeight / 2}
                            width="600"
                            height={Math.max(4, bandHeight)}
                            fill="#065f46"
                            opacity="0.25"
                          />
                        );
                      })()}
                      {/* Final Value Line */}
                      <line
                        x1="60"
                        y1={310 - (dynK / 2.5) * 250}
                        x2="660"
                        y2={310 - (dynK / 2.5) * 250}
                        stroke="#10b981"
                        strokeWidth="1.5"
                        strokeDasharray="6,4"
                      />
                      <text
                        x="655"
                        y={310 - (dynK / 2.5) * 250 - 6}
                        fill="#34d399"
                        fontSize="10"
                        textAnchor="end"
                        fontWeight="700"
                      >
                        y_ss = {dynK.toFixed(2)}
                      </text>
                    </>
                  )}

                  {/* Input Signal Path */}
                  {(() => {
                    const pts = dynCalculations.times.map((t, i) => {
                      const px = 60 + (t / dynCalculations.tMax) * 600;
                      const val = dynCalculations.inputSignal[i];
                      const py = dynInputType === 'ramp'
                        ? 310 - (val / 4.0) * 250
                        : dynInputType === 'sinusoid'
                        ? 180 - val * 70
                        : 310 - (val / 2.5) * 250;
                      return `${px.toFixed(1)},${py.toFixed(1)}`;
                    }).join(' ');
                    return (
                      <polyline
                        points={pts}
                        fill="none"
                        stroke="#94a3b8"
                        strokeWidth="2"
                        strokeDasharray="5,4"
                      />
                    );
                  })()}

                  {/* Output Signal Path */}
                  {(() => {
                    const pts = dynCalculations.times.map((t, i) => {
                      const px = 60 + (t / dynCalculations.tMax) * 600;
                      const val = dynCalculations.outputSignal[i];
                      const py = dynInputType === 'ramp'
                        ? 310 - (val / 4.0) * 250
                        : dynInputType === 'sinusoid'
                        ? 180 - val * 70
                        : 310 - (val / 2.5) * 250;
                      return `${px.toFixed(1)},${Math.max(20, Math.min(330, py)).toFixed(1)}`;
                    }).join(' ');
                    return (
                      <polyline
                        points={pts}
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="3.5"
                      />
                    );
                  })()}

                  {/* Dynamic Markers for Step Response */}
                  {dynInputType === 'step' && dynSystemOrder === 'second' && dynCalculations.peakTime > 0 && dynCalculations.peakTime < dynCalculations.tMax && (
                    <g>
                      {(() => {
                        const px = 60 + (dynCalculations.peakTime / dynCalculations.tMax) * 600;
                        const yVal = dynK * (1 + dynCalculations.overshootPercent / 100);
                        const py = 310 - (yVal / 2.5) * 250;
                        return (
                          <>
                            <circle cx={px} cy={py} r="5" fill="#f43f5e" />
                            <line x1={px} y1={py} x2={px} y2="310" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3,3" />
                            <text x={px} y={Math.max(35, py - 10)} fill="#f43f5e" fontSize="10" fontWeight="700" textAnchor="middle">
                              tp ({dynCalculations.peakTime.toFixed(2)}s)
                            </text>
                          </>
                        );
                      })()}
                    </g>
                  )}

                  {/* Settling Time Marker */}
                  {dynInputType === 'step' && isFinite(dynCalculations.settlingTime2) && dynCalculations.settlingTime2 < dynCalculations.tMax && (
                    <g>
                      {(() => {
                        const px = 60 + (dynCalculations.settlingTime2 / dynCalculations.tMax) * 600;
                        return (
                          <>
                            <line x1={px} y1="40" x2={px} y2="310" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4,3" />
                            <text x={px} y="330" fill="#34d399" fontSize="10" fontWeight="700" textAnchor="middle">
                              ts ({dynCalculations.settlingTime2.toFixed(2)}s)
                            </text>
                          </>
                        );
                      })()}
                    </g>
                  )}

                  {/* Axes labels */}
                  <text x="650" y="328" fill="#94a3b8" fontSize="10" textAnchor="end">Time t (s) →</text>
                  <text x="50" y="30" fill="#94a3b8" fontSize="10" textAnchor="end">y(t)</text>
                  <text x="50" y="315" fill="#64748b" fontSize="10" textAnchor="end">0.0</text>
                </svg>
              </div>

              {/* Engineering Pedagogical Takeaways */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>Unit V Response Dynamics Engineering Rules:</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  1. <strong>Zero-Order:</strong> Output tracks input instantaneously with zero delay and zero phase lag across all frequencies. In real hardware, stray reactances convert all sensors into 1st/2nd order at high frequencies.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  2. <strong>First-Order:</strong> Strictly zero overshoot (<code className="text-emerald-300">Mp = 0%</code>). Under a ramp input, the output continuously lags behind by <code className="text-amber-300">Δt = τ = {dynCalculations.rampTimeLag.toFixed(2)} s</code>, incurring steady dynamic error <code className="text-rose-300">ess = K·R·τ = {dynCalculations.rampDynamicError.toFixed(2)}</code>.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  3. <strong>Second-Order Damping:</strong> When <code className="text-cyan-300">ζ = 0.707</code> (optimal damping), settling time is minimized with only <code className="text-emerald-300">~4.3%</code> overshoot, offering the flattest frequency response and widest distortion-free bandwidth.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
