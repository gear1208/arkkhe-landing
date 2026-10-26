export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#system" },
  { label: "Services", href: "#modules" },
  { label: "Contact", href: "#contact" }
] as const;

export const VECTORS = [
  { id: "structure", label: "Structure", index: "01", copy: "Structure distributes force through the frame, keeping every motion deliberate and every load legible." },
  { id: "flow", label: "Flow", index: "02", copy: "Flow links each axis into one continuous response, so transitions feel considered rather than mechanical." },
  { id: "peak", label: "Peak", index: "03", copy: "Peak output is available when the task calls for it, without compromising control at the edge of a movement." },
  { id: "balance", label: "Balance", index: "04", copy: "Balance keeps the centre of effort aligned with the task, reducing correction and preserving a natural rhythm." },
  { id: "core", label: "Core", index: "05", copy: "The core coordinates sensing, response and recovery as one system. Each module shares the same frame of state." },
  { id: "signal", label: "Signal", index: "06", copy: "Signal turns contact and position into useful feedback, giving the system a clear picture of every interaction." },
  { id: "sync", label: "Sync", index: "07", copy: "Sync keeps every axis moving to a common clock, aligning the smallest correction with the larger intention." },
  { id: "vision", label: "Vision", index: "08", copy: "Vision is the design principle behind the hardware: fewer distractions, clearer intent, and form that earns its place." }
] as const;

export const SYSTEM_BLOCKS = [
  {
    number: "34",
    paragraphs: [
      "Systems designed where form aligns with action. Every element serves a defined role, balancing visual clarity with functional precision.",
      "Function refined through structure and intent. Built to adapt, perform, and evolve consistently across dynamic environments and use cases."
    ]
  },
  {
    number: "27",
    paragraphs: [
      "Engineered where movement meets precision. Designed for seamless interaction, controlled performance, and fluid transitions across every state."
    ]
  }
] as const;

export const MODULES = [
  { code: "EX-01", name: "Carpal array", copy: "Nineteen driven axes in the span of a palm. The array resolves a grip in a single pass instead of correcting toward it.", specs: [["Axes", "19"], ["Latency", "4 ms"]] },
  { code: "EX-02", name: "Tendon loom", copy: "Load is routed along woven filament rather than gearing, so the limb absorbs a shock instead of transmitting it upward.", specs: [["Filament", "Aramid"], ["Peak load", "184 kg"]] },
  { code: "EX-03", name: "Sense skin", copy: "A continuous pressure surface across the shell. Contact is read as a shape, not as a set of isolated points.", specs: [["Resolution", "0.4 mm"], ["Coverage", "97%"]] },
  { code: "EX-04", name: "Core bus", copy: "One deterministic loop for the whole chassis. Every module reads the same frame of state at the same instant.", specs: [["Cycle", "1 kHz"], ["Jitter", "< 40 µs"]] },
  { code: "EX-05", name: "Thermal spine", copy: "Heat leaves through the structure itself. The frame is the radiator, which removes the fan and the noise floor with it.", specs: [["Dissipation", "310 W"], ["Δ ambient", "11 °C"]] },
  { code: "EX-06", name: "Return cell", copy: "Braking energy is recovered on every deceleration and held for the next actuation rather than dumped as heat.", specs: [["Recovery", "38%"], ["Cells", "6"]] }
] as const;

export const PROCESS = [
  { number: "01", title: "Survey", copy: "We measure the task before we describe the machine. Reach, load, cadence and tolerance are recorded on site, in the environment the unit will actually work in." },
  { number: "02", title: "Structure", copy: "The frame is resolved around those numbers. Geometry follows load path, and the visual language falls out of the structure rather than being applied to it." },
  { number: "03", title: "Calibrate", copy: "Every axis is tuned against the recorded task. Response curves, damping and grip thresholds are set per deployment, never shipped as a default." },
  { number: "04", title: "Deploy", copy: "The unit enters the line with its telemetry already streaming. Drift is corrected from real operating data across the whole fleet, continuously." }
] as const;

export const METRICS = [
  { target: 3, suffix: "K", label: "Units deployed" },
  { target: 72, suffix: "K", label: "System operations" },
  { target: 5, suffix: "K", label: "Active modules" }
] as const;

export const CLOSING = [
  { text: "First", align: "right" },
  { text: "Exoform", align: "right" },
  { text: "in the", align: "left", slash: true },
  { text: "world", align: "right" }
] as const;

export const FOOTER_LINKS = [
  { title: "System", links: [{ label: "Architecture", href: "#system" }, { label: "Modules", href: "#modules" }, { label: "Process", href: "#process" }, { label: "Telemetry", href: "#metrics" }] },
  { title: "Company", links: [{ label: "About us", href: "#system" }, { label: "Careers", href: "#contact" }, { label: "Press", href: "#contact" }, { label: "Index", href: "#home" }] },
  { title: "Contact", links: [{ label: "hello@arkkhe.systems", href: "mailto:hello@arkkhe.systems" }, { label: "+41 44 000 00 00", href: "tel:+41440000000" }, { label: "Zürich — Werkhalle 4", href: "#contact" }] }
] as const;
