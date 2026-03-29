import { useState, useRef } from "react";
import { LOADING_MESSAGES } from "../utils/constants";

export function useAnalyzer() {
  const [url, setUrl]               = useState("");
  const [loading, setLoading]       = useState(false);
  const [result, setResult]         = useState(null);
  const [error, setError]           = useState("");
  const [loadingMsg, setLoadingMsg] = useState("");
  const intervalRef = useRef(null);

  const startLoadingCycle = () => {
    let idx = 0;
    setLoadingMsg(LOADING_MESSAGES[0]);
    intervalRef.current = setInterval(() => {
      idx = (idx + 1) % LOADING_MESSAGES.length;
      setLoadingMsg(LOADING_MESSAGES[idx]);
    }, 1800);
  };

  const stopLoadingCycle = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const analyze = async () => {
    if (!url.trim() || loading) return;
    setLoading(true);
    setError("");
    setResult(null);
    startLoadingCycle();

    try {
      // Always call /api/analyze — works locally (Vite proxy) and on Vercel
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.details || data?.error || `Server error ${response.status}`);
      setResult(data);
    } catch (err) {
      setError("Analysis failed: " + err.message);
    } finally {
      stopLoadingCycle();
      setLoading(false);
    }
  };

  return { url, setUrl, loading, result, error, loadingMsg, analyze };
}
