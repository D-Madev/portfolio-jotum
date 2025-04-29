import './Mini-stats-card.css' 

/**
 * Props:
 * - label: string (short text, up to ~20 words)
 * - value: number (target number to count up to)
 * - suffix: string (optional, e.g. '+')
 */
export default function MiniStatCard({ label, value, suffix = '' }) {
  return (
    <div className='mini-stat-card'>
      <div className='mini-stat-label'>
        {label}
      </div>
      <div className="mini-stat-number">
        {value} <p className='mini-stat-suffix'>{suffix}</p>
      </div>
    </div>
  )
}