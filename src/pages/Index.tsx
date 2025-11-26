import { motion } from "framer-motion";
import { Download, Smartphone, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";

// Android Icon Component
const AndroidIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1349 1.0989L4.8428 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.186.8532 13.8324.5 16.9514h23c-.3532-3.119-2.1889-5.765-5.1225-7.63z" />
  </svg>
);

// iOS/Apple Icon Component
const AppleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

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

      {/* Download Section - Desktop */}
      <section className="hidden sm:block py-16 px-4 bg-background">
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
                href="https://github.com/Wassim01-3/ToucheArt/releases/download/ToucheArt.apk/ToucheArt.apk"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 bg-primary text-primary-foreground px-8 py-6 rounded-full font-semibold text-lg shadow-button hover:shadow-button hover:opacity-90 transition-all duration-300 min-w-[280px] justify-center"
              >
                <AndroidIcon className="w-6 h-6" />
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
                <AppleIcon className="w-6 h-6" />
                <span>Ouvrir Webapp iOS</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-sand text-center pb-20 sm:pb-8">
        <p className="text-muted-foreground">
          © 2025 ToucheArt. Tous droits réservés. 
        </p>
      </footer>

      {/* Mobile Bottom Tab Bar - Download Buttons */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
        <div className="flex items-center justify-around px-2 py-3 gap-2">
          {/* Android APK Download Button */}
          <motion.button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              const apkUrl = "https://github.com/Wassim01-3/ToucheArt/releases/download/ToucheArt.apk/ToucheArt.apk";
              window.location.href = apkUrl;
            }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center gap-1 flex-1 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold text-sm shadow-md hover:opacity-90 transition-all duration-300 min-h-[70px]"
          >
            <AndroidIcon className="w-6 h-6" />
            <span className="text-xs">Android</span>
          </motion.button>

          {/* iOS Webapp Button */}
          <motion.button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              // TODO: Replace with actual webapp URL
              const webappUrl = "#"; // Add your webapp URL here
              if (webappUrl !== "#") {
                window.open(webappUrl, "_blank");
              } else {
                alert("Le lien de l'application web sera disponible bientôt");
              }
            }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center gap-1 flex-1 bg-golden text-golden-foreground px-4 py-3 rounded-lg font-semibold text-sm shadow-md hover:opacity-90 transition-all duration-300 min-h-[70px]"
          >
            <AppleIcon className="w-6 h-6" />
            <span className="text-xs">iOS</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Index;

