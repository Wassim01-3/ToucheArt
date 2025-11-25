import { motion } from "framer-motion";
import { Download, Smartphone, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-sand">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Découvrez ToucheArt
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La plateforme gratuite pour acheter et vendre des œuvres d'art et de l'artisanat en Tunisie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-card rounded-lg shadow-card"
            >
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Art & Artisanat</h3>
              <p className="text-muted-foreground">
                Découvrez une vaste collection d'œuvres d'art et d'artisanat tunisien
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-card rounded-lg shadow-card"
            >
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Multi-plateforme</h3>
              <p className="text-muted-foreground">
                Disponible sur Android et iOS pour une expérience optimale
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-card rounded-lg shadow-card"
            >
              <Download className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">100% Gratuit</h3>
              <p className="text-muted-foreground">
                Application entièrement gratuite, sans frais cachés
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Téléchargez ToucheArt
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choisissez votre plateforme et commencez à explorer l'art et l'artisanat tunisien
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Android APK Download Button */}
              <motion.a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // TODO: Replace with actual APK download URL
                  const apkUrl = "#"; // Add your APK URL here
                  if (apkUrl !== "#") {
                    window.location.href = apkUrl;
                  } else {
                    alert("Le lien de téléchargement sera disponible bientôt");
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 bg-primary text-primary-foreground px-8 py-6 rounded-full font-semibold text-lg shadow-button hover:shadow-button hover:opacity-90 transition-all duration-300 min-w-[280px] justify-center"
              >
                <Download className="w-6 h-6" />
                <span>Télécharger APK Android</span>
              </motion.a>

              {/* iOS Webapp Button */}
              <motion.a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // TODO: Replace with actual webapp URL
                  const webappUrl = "#"; // Add your webapp URL here
                  if (webappUrl !== "#") {
                    window.open(webappUrl, "_blank");
                  } else {
                    alert("Le lien de l'application web sera disponible bientôt");
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 bg-golden text-golden-foreground px-8 py-6 rounded-full font-semibold text-lg shadow-button hover:shadow-button hover:opacity-90 transition-all duration-300 min-w-[280px] justify-center"
              >
                <Smartphone className="w-6 h-6" />
                <span>Ouvrir Webapp iOS</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-sand text-center">
        <p className="text-muted-foreground">
          © 2025 ToucheArt. Tous droits réservés. 
        </p>
      </footer>
    </div>
  );
};

export default Index;


