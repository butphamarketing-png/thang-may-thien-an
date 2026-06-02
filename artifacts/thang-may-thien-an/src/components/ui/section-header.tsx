import { motion } from "framer-motion";

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const subClass = dark ? "text-white/75" : "text-muted-foreground";

  return (
    <div className={`max-w-3xl mb-14 ${alignClass}`}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-4xl font-bold uppercase tracking-wide ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </motion.h2>
      <div
        className={`w-20 h-1 bg-secondary mt-4 ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle ? <p className={`mt-5 text-lg leading-relaxed ${subClass}`}>{subtitle}</p> : null}
    </div>
  );
}
