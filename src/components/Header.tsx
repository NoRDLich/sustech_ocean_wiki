import { Container } from "react-bootstrap";

interface HeaderProps {
  title: string;
  lead: string;
}

export function Header({ title, lead }: HeaderProps) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
        color: "white",
        padding: "60px 40px 40px 40px",
        marginBottom: "30px",
        textAlign: "center",
      }}
    >
      <Container>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "15px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            opacity: "0.9",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
            fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          {lead}
        </p>
      </Container>
    </div>
  );
}
