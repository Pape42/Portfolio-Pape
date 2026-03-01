"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import styles from "./style.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Veuillez remplir tous les champs");
      return;
    }

    setIsLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
  setStatus("✅ Message envoyé avec succès !");
  setFormData({ name: "", email: "", message: "" });
} else {
  const errorData = await res.json();
  setStatus(`❌ ${errorData.error || "Erreur lors de l'envoi du message"}`);
}
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Erreur de connexion");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          type="text"
          name="name" 
          placeholder="Nom" 
          value={formData.name}
          onChange={handleChange}
          required 
          disabled={isLoading}
        />
        
        <input 
          type="email"
          name="email" 
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          required 
          disabled={isLoading}
        />
        
        <textarea 
          name="message" 
          placeholder="Message" 
          value={formData.message}
          onChange={handleChange}
          required 
          disabled={isLoading}
        />
        
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>

      {status && <p className={styles.status}>{status}</p>}
    </main>
  );
}