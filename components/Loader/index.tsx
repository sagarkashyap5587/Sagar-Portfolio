// <================== Import Dependencies ==================>
"use client";

import { Box, CircularProgress } from "@mui/material";

// <================== Loader Component Props ==================>
interface LoaderProps {
  isOpen: boolean;
  message?: string;
  type?: "full" | "content";
}

// <================== Loader Component ==================>
export const Loader = ({ isOpen, message = "Loading...", type = "full" }: LoaderProps) => {
  if (!isOpen) return null;

  // For tab switching, only cover content area to keep profile visible
  // For project opening, cover full screen
  const loaderStyles = type === "content" ? {
    position: "fixed",
    top: "140px", // Below navigation
    left: "445px", // After profile sidebar on desktop
    right: "25px",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    backdropFilter: "blur(15px)",
    zIndex: 999,
    borderRadius: "20px 0 0 20px",
    border: "2px solid rgba(255,255,255,0.2)",
    borderLeft: "none",
    // Responsive styles
    "@media (max-width: 1024px)": {
      left: 0,
      right: 0,
      top: "120px",
      borderRadius: "20px 20px 0 0",
      border: "2px solid rgba(255,255,255,0.2)",
    },
    "@media (max-width: 768px)": {
      top: "100px",
      borderRadius: "15px 15px 0 0",
    },
  } : {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    backdropFilter: "blur(20px)",
    zIndex: 9999,
  };

  return (
    <Box
      sx={{
        ...loaderStyles,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
    >
      {/* Animated background gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.15), transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(240, 147, 251, 0.12), transparent 45%),
            radial-gradient(circle at 40% 60%, rgba(118, 75, 162, 0.1), transparent 50%)
          `,
          animation: "pulse 4s ease-in-out infinite",
        }}
      />

      {/* Loader content container */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {/* Custom styled spinner */}
        <Box
          sx={{
            width: 80,
            height: 80,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Outer rotating ring */}
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: "4px solid transparent",
              borderTop: "4px solid #667eea",
              borderRight: "4px solid #764ba2",
              borderBottom: "4px solid #f093fb",
              animation: "spin 2s linear infinite",
              filter: "drop-shadow(0 0 20px rgba(102, 126, 234, 0.8))",
            }}
          />

          {/* Inner rotating ring - counter direction */}
          <Box
            sx={{
              position: "absolute",
              width: "60%",
              height: "60%",
              borderRadius: "50%",
              border: "3px solid transparent",
              borderTop: "3px solid #f093fb",
              borderLeft: "3px solid #667eea",
              animation: "spin 1.5s linear infinite reverse",
              filter: "drop-shadow(0 0 15px rgba(240, 147, 251, 0.8))",
            }}
          />

          {/* Center glow */}
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea, #764ba2, #f093fb)",
              filter: "blur(8px)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </Box>

        {/* Loading message */}
        <Box
          sx={{
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textAlign: "center",
            textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            animation: "fadeInOut 2s ease-in-out infinite",
          }}
        >
          {message}
        </Box>

        {/* Loading dots animation */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          {[0, 1, 2].map((index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea, #f093fb)",
                animation: `dotBounce 1.5s ease-in-out infinite ${index * 0.2}s`,
                filter: "drop-shadow(0 0 10px rgba(102, 126, 234, 0.8))",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes fadeInOut {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes dotBounce {
          0%, 80%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          40% {
            transform: translateY(-10px) scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
};