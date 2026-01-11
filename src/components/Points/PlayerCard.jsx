import { RankBadge } from "./RankBadge";

export function PlayerCard({ rank, name, isPodium = false, totalScore }) {

  // 🔥 Rank based color class
  const rankClass =
    rank === 1
      ? "rank-gold"
      : rank === 2
      ? "rank-silver"
      : rank === 3
      ? "rank-bronze"
      : rank <= 10
      ? "rank-top"
      : "rank-default";

  if (isPodium) {
    const podiumClass =
      rank === 1
        ? "podium-first-base"
        : rank === 2
        ? "podium-second-base"
        : "podium-third-base";

    return (
      <div className={`podium-card ${rankClass}`}>
        <div className={`podium-base ${podiumClass}`}>
          <div className="podium-content">
            <RankBadge rank={rank} size="lg" />

            <div className="podium-info">
              <h3 className="podium-name">{name}</h3>
              <p className="player-score">{totalScore} Points</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`player-card ${rankClass}`}>
      <RankBadge rank={rank} />

      <div className="player-info">
        <h3 className="player-name">{name}</h3>
        <p className="player-rank-label">Rank #{rank}</p>
      </div>

      <div className="player-score-section">
        <p className="player-score">{totalScore}</p>
        <p className="player-points-label">points</p>
      </div>
    </div>
  );
}
