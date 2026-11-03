"use client";

import { useEffect, useState } from "react";

export default function TombolTema() {
    const [gelap, setGelap] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("tema") === "gelap") {
            document.documentElement.classList.add("dark");
        }
    }, []);

    function gantiTema() {
        const gelap = document.documentElement.classList.toggle("dark");
        localStorage.setItem("tema", gelap ? "gelap" : "terang");
        setGelap(gelap);
    }

    return (
        <button
          type="button"
          onClick={gantiTema}
          className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen"
        >
            {gelap ? "Mode Terang" : "Mode Gelap"}
        </button>
    );
}