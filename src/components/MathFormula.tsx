import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

interface MathFormulaProps {
  formula: string;
  inline?: boolean;
  className?: string;
}

export const MathFormula: React.FC<MathFormulaProps> = ({
  formula,
  inline = false,
  className = "",
}) => {
  try {
    if (inline) {
      return <InlineMath math={formula} />;
    } else {
      return (
        <div
          className={`math-formula ${className}`}
          style={{ margin: "20px 0" }}
        >
          <BlockMath math={formula} />
        </div>
      );
    }
  } catch (error) {
    console.error("Math formula rendering error:", error);
    return <span style={{ color: "red" }}>公式渲染错误: {formula}</span>;
  }
};

export default MathFormula;
