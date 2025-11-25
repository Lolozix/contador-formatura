import { useEffect, useState } from "react";

export default function Home() {
  const targetDate = new Date("2025-12-20T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        setFinished(true);
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Contagem Regressiva – Seu Nome Completo – Turma XYZ</h1>

      {!finished ? (
        <div>
          <h2>{timeLeft.days} dias</h2>
          <h2>{timeLeft.hours} horas</h2>
          <h2>{timeLeft.minutes} min</h2>
          <h2>{timeLeft.seconds} seg</h2>
        </div>
      ) : (
        <h2>🎓 Parabéns, chegou o grande dia da nossa formatura!</h2>
      )}

      <p style={{ marginTop: "30px" }}>
        Depois da formatura, pretendo viajar com meus amigos e aproveitar as férias!
      </p>

      <img src="/grad.jpg" style={{ width: "80%", borderRadius: "10px", marginTop: "20px" }} />
    </div>
  );
}
