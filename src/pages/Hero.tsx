import { motion } from "framer-motion";
// Asegúrate de que la ruta de tu imagen sea correcta
import profilePic from "../assets/profile.png";
import { useState } from "react";
import { Modal, Box, Typography, Button, Container, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function Hero() {
  // Estado para el visor del CV
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const frontendProjects = [
    {
      title: "PORTFOLIO_PHOTOGRAPHER",
      desc: "High-performance visual engine for professional photography. Features fluid UI transitions and dynamic artist profiling.",
      tech: "React / MUI / Framer Motion / TS",
      link: "https://portfolio-fernanda-andia.vercel.app/",
      imageUrl: "portfolio-photographer.png",
    },
    {
      title: "TOURISM_BOLIVIAN_PAGE",
      desc: "B2B/B2C hybrid platform for Bolivian tourism. Synchronizes travelers with local agencies through a centralized ecosystem.",
      tech: "React / MUI / Framer Motion / TS",
      link: "https://golocal-seven.vercel.app/",
      imageUrl: "golocal.png",
    },
    {
      title: "VINEYARD_DASHBOARD",
      desc: "Dynamic visualization interface for vineyard management. Real-time monitoring and presentation-ready logistics dashboard.",
      tech: "React / MUI / Recharts",
      link: "https://erp-vinedo.vercel.app/",
      imageUrl: "erp-vinedo.png",
    },
  ];

  const technicalSkills = [
    {
      category: "PROGRAMMING_LANGUAGES",
      level: 80,
      tech: "Java, Kotlin, C++, C#, Python, JavaScript, Swift, HTML/CSS, T-SQL",
    },
    {
      category: "AI_&_EMERGING_TECH",
      level: 70,
      tech: "RAG, LLM Orchestration, Computer Vision",
    },
    {
      category: "FRAMEWORKS_&_LIBS",
      level: 80,
      tech: "React, Angular, Vue.js, React Native",
    },
    {
      category: "DATABASES",
      level: 75,
      tech: "MySQL, MongoDB, PostgreSQL, T-SQL",
    },
    {
      category: "AUTOMATION_&_RPA",
      level: 60,
      tech: "ElectroNeek, n8n, Workflow Automation",
    },
    {
      category: "TOOLS_&_CLOUD",
      level: 70,
      tech: "AWS, Google Cloud, Docker, GitHub, Postman, VMWare",
    },
    { category: "GAME_DEVELOPMENT", level: 80, tech: "Unity, Godot Engine" },
  ];

  const spokenLanguages = [
    { name: "SPANISH_PACK (NATIVE)", level: 100 },
    { name: "ENGLISH_PACK (B2_UPPER_INT)", level: 75 },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#050505",
        backgroundImage:
          "radial-gradient(circle at 50% 50%, #1a0000 0%, #050505 80%)",
        color: "#fff",
        fontFamily: '"Courier New", Courier, monospace',
        overflowX: "hidden", // Previene scroll horizontal accidental en móviles
      }}
    >
      {/* ==================== SECCIÓN 1: HERO ==================== */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          py: { xs: 4, md: 8 },
          pt: { xs: 8, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              mb: 4,
            }}
          >
            <Typography
              sx={{
                color: "#ff0000",
                fontSize: { xs: "0.7rem", sm: "0.8rem" },
                letterSpacing: "0.1em",
                textAlign: { xs: "center", md: "right" },
              }}
            >
              ● STATUS: ONLINE // MATEO_PROTOCOL
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* FOTO E INTERFAZ ESCÁNER */}
            {/* CAMBIO: order={{ xs: 1, md: 1 }} para que la foto salga primero en móviles */}
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 1 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    padding: { xs: "10px", sm: "20px" },
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                    maxWidth: { xs: "300px", sm: "400px", md: "450px" },
                    "&::before, &::after": {
                      content: '""',
                      position: "absolute",
                      width: { xs: "25px", sm: "40px" },
                      height: { xs: "25px", sm: "40px" },
                    },
                    "&::before": {
                      top: 0,
                      left: 0,
                      borderTop: "2px solid #ff0000",
                      borderLeft: "2px solid #ff0000",
                    },
                    "&::after": {
                      bottom: 0,
                      right: 0,
                      borderBottom: "2px solid #ff0000",
                      borderRight: "2px solid #ff0000",
                    },
                  }}
                >
                  {/* FOTO DE PERFIL */}
                  <Box
                    component="img"
                    src={profilePic}
                    alt="Luis Mateo Michel Flores"
                    sx={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      filter: "grayscale(20%) contrast(120%)",
                      boxShadow: "0px 0px 30px rgba(255, 0, 0, 0.15)",
                      border: "1px solid rgba(255, 0, 0, 0.3)",
                    }}
                  />

                  {/* LOGO */}
                  <Box
                    component="img"
                    src="/logo.png"
                    alt="Mateo Logo"
                    sx={{
                      position: "absolute",
                      bottom: { xs: "10px", sm: "20px" },
                      left: { xs: "10px", sm: "20px" },
                      width: { xs: "90px", sm: "150px" },
                      height: "auto",
                      zIndex: 10,
                      opacity: 0.8,
                      filter: "drop-shadow(0px 0px 5px rgba(255,0,0,0.6))",
                    }}
                  />

                  {/* COORDENADAS SUPERIOR DERECHA */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: { xs: "10px", sm: "30px" },
                      right: { xs: "10px", sm: "30px" },
                      textAlign: "right",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#ff0000",
                        fontSize: "0.6rem",
                        opacity: 0.7,
                      }}
                    >
                      COORD: 16.5000° S
                    </Typography>
                    <Typography
                      sx={{
                        color: "#ff0000",
                        fontSize: "0.6rem",
                        opacity: 0.7,
                      }}
                    >
                      LAT: 68.1193° W
                    </Typography>
                    <Typography
                      sx={{
                        color: "#ff0000",
                        fontSize: "0.6rem",
                        opacity: 0.7,
                      }}
                    >
                      SCAN_MODE: ACTIVE
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* TEXTOS Y BOTONES PRINCIPALES */}
            {/* CAMBIO: order={{ xs: 2, md: 2 }} para que el texto salga debajo de la foto en móviles */}
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 2 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* CAMBIO: Se agregó el nombre completo con estilo de consola */}
                <Typography
                  sx={{
                    color: "#ff0000",
                    fontFamily: "monospace",
                    fontSize: { xs: "0.85rem", sm: "1rem" },
                    letterSpacing: "0.1em",
                    textAlign: { xs: "center", md: "left" },
                    mb: 1,
                    opacity: 0.9,
                  }}
                >
                  {">"} SYS.USER: LUIS MATEO MICHEL FLORES
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    fontFamily: "sans-serif",
                    fontStyle: "italic",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  SOFTWARE
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    fontFamily: "sans-serif",
                    fontStyle: "italic",
                    color: "#ff0000",
                    textShadow:
                      "0 0 10px rgba(255,0,0,0.8), 0 0 20px rgba(255,0,0,0.4)",
                    mb: 3,
                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  DEVELOPER
                </Typography>

                <Typography
                  sx={{
                    color: "#a0a0a0",
                    mb: 4,
                    fontFamily: "sans-serif",
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    lineHeight: 1.6,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Building high-performance digital solutions. Specializing in
                  <span style={{ color: "#fff", fontWeight: "bold" }}>
                    {" "}
                    AI Integration
                  </span>
                  ,
                  <span style={{ color: "#fff", fontWeight: "bold" }}>
                    {" "}
                    Computer Vision
                  </span>{" "}
                  and robust frontend/backend architectures.
                </Typography>

                {/* BOTONES */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Button
                    variant="contained"
                    href="https://www.linkedin.com/in/mateo-michel"
                    target="_blank"
                    sx={{
                      bgcolor: "#ff0000",
                      color: "#fff",
                      borderRadius: 0,
                      fontWeight: "bold",
                      px: { xs: 2, sm: 4 },
                      py: 1.5,
                      fontFamily: "monospace",
                      width: { xs: "100%", sm: "auto" },
                      "&:hover": {
                        bgcolor: "#cc0000",
                        boxShadow: "0 0 15px rgba(255,0,0,0.6)",
                      },
                    }}
                  >
                    [ ACCESS_LINKEDIN ]
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setIsResumeOpen(true)}
                    sx={{
                      borderColor: "#ff0000",
                      color: "#ff0000",
                      borderRadius: 0,
                      px: { xs: 2, sm: 4 },
                      py: 1.5,
                      fontFamily: "monospace",
                      width: { xs: "100%", sm: "auto" },
                      "&:hover": {
                        borderColor: "#ff0000",
                        bgcolor: "rgba(255,0,0,0.1)",
                      },
                    }}
                  >
                    [ DECRYPT_RESUME ]
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* ==================== SECCIÓN 1.5: SKILLS & CAPABILITIES ==================== */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          borderTop: "1px dashed rgba(255,0,0,0.3)",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              color: "#ff0000",
              mb: 5,
              fontFamily: "monospace",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "2.125rem" }, // Responsivo
              wordBreak: "break-word",
            }}
          >
            {">"} SYSTEM_CAPABILITIES // SKILLS_AND_INTERESTS
          </Typography>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* COLUMNA IZQUIERDA */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  mb: 3,
                  fontFamily: "monospace",
                  borderBottom: "1px solid #ff0000",
                  display: "inline-block",
                  pb: 1,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                }}
              >
                [ TECHNICAL_MODULES ]
              </Typography>

              {technicalSkills.map((skill, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 0.5,
                      fontFamily: "monospace",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      }}
                    >
                      {skill.category}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#ff0000",
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      }}
                    >
                      {skill.level}%
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      height: "14px",
                      border: "1px solid rgba(255,0,0,0.4)",
                      p: "2px",
                      mb: 1,
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: index * 0.1,
                      }}
                      style={{
                        height: "100%",
                        backgroundColor: "#ff0000",
                        boxShadow: "0 0 10px rgba(255,0,0,0.6)",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="caption"
                    sx={{
                      color: "#a0a0a0",
                      fontFamily: "monospace",
                      display: "block",
                    }}
                  >
                    <span style={{ color: "#ff0000" }}>{">"} INCLUDES:</span>{" "}
                    {skill.tech}
                  </Typography>
                </Box>
              ))}
            </Grid>

            {/* COLUMNA DERECHA */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ mb: 5 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    mb: 3,
                    fontFamily: "monospace",
                    borderBottom: "1px solid #ff0000",
                    display: "inline-block",
                    pb: 1,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                  }}
                >
                  [ LANGUAGE_PACKS ]
                </Typography>

                {spokenLanguages.map((lang, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 0.5,
                        fontFamily: "monospace",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        }}
                      >
                        {lang.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#ff0000",
                          fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        }}
                      >
                        {lang.level}%
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "8px",
                        border: "1px dashed rgba(255,0,0,0.5)",
                        p: "1px",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          ease: "easeOut",
                          delay: index * 0.2,
                        }}
                        style={{
                          height: "100%",
                          backgroundColor: "rgba(255,0,0,0.8)",
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Decoración de Terminal Extra */}
              <Box
                sx={{
                  bgcolor: "rgba(255,0,0,0.05)",
                  border: "1px solid #ff0000",
                  p: { xs: 2, sm: 3 },
                  fontFamily: "monospace",
                }}
              >
                <Typography
                  sx={{ color: "#ff0000", mb: 1, fontSize: "0.8rem" }}
                >
                  LOG_OUTPUT:
                </Typography>
                <Typography
                  sx={{ color: "#a0a0a0", fontSize: "0.8rem", mb: 0.5 }}
                >
                  {">"} Loading environment variables...
                </Typography>
                <Typography
                  sx={{ color: "#a0a0a0", fontSize: "0.8rem", mb: 0.5 }}
                >
                  {">"} Optimizing algorithms...
                </Typography>
                <Typography
                  sx={{ color: "#a0a0a0", fontSize: "0.8rem", mb: 0.5 }}
                >
                  {">"} Initializing AI models...
                </Typography>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Typography sx={{ color: "#fff", fontSize: "0.8rem", mt: 2 }}>
                    _ SYSTEM_READY
                  </Typography>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ==================== SECCIÓN 2: FRONTEND DESIGNS ==================== */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "rgba(0,0,0,0.3)" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              color: "#ff0000",
              mb: 5,
              fontFamily: "monospace",
              fontWeight: "bold",
              fontSize: { xs: "1.3rem", md: "2.125rem" },
              wordBreak: "break-word",
            }}
          >
            {">"} FRONTEND_ARCHITECTURE_DEPLOYS
          </Typography>
          <Grid container spacing={4}>
            {frontendProjects.map((project, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <motion.div whileHover={{ y: -10 }} style={{ height: "100%" }}>
                  <Box
                    sx={{
                      border: "1px solid #ff0000",
                      bgcolor: "rgba(255, 0, 0, 0.05)",
                      p: { xs: 2, sm: 3 },
                      position: "relative",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      "&:before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "10px",
                        height: "10px",
                        borderTop: "2px solid #ff0000",
                        borderLeft: "2px solid #ff0000",
                      },
                      "&:hover .project-image": {
                        filter: "grayscale(0%) contrast(100%)",
                        opacity: 1,
                      },
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#fff",
                          mb: 2,
                          fontWeight: "bold",
                          letterSpacing: "1px",
                          fontFamily: "monospace",
                          fontSize: { xs: "1.1rem", sm: "1.25rem" },
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Box
                        sx={{
                          width: "100%",
                          height: "150px",
                          mb: 3,
                          border: "1px dashed rgba(255,0,0,0.4)",
                          overflow: "hidden",
                          position: "relative",
                          bgcolor: "#000",
                        }}
                      >
                        <Box
                          component="img"
                          className="project-image"
                          src={project.imageUrl}
                          alt={`Preview of ${project.title}`}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            filter:
                              "grayscale(80%) sepia(20%) hue-rotate(-50deg) saturate(200%)",
                            opacity: 0.8,
                            transition: "all 0.3s ease-in-out",
                          }}
                        />
                        <Typography
                          sx={{
                            position: "absolute",
                            bottom: 5,
                            right: 5,
                            color: "#ff0000",
                            fontSize: "0.6rem",
                            bgcolor: "rgba(0,0,0,0.7)",
                            px: 1,
                            fontFamily: "monospace",
                          }}
                        >
                          IMG_SRC_VERIFIED
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#a0a0a0",
                          mb: 3,
                          lineHeight: 1.5,
                          fontFamily: "sans-serif",
                        }}
                      >
                        {project.desc}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#ff0000",
                          display: "block",
                          mb: 2,
                          borderBottom: "1px solid rgba(255,0,0,0.3)",
                          pb: 1,
                          fontFamily: "monospace",
                        }}
                      >
                        TECH_STACK: {project.tech}
                      </Typography>
                      <Button
                        fullWidth
                        href={project.link}
                        target="_blank"
                        variant="outlined"
                        sx={{
                          borderColor: "#ff0000",
                          color: "#ff0000",
                          borderRadius: 0,
                          fontFamily: "monospace",
                          "&:hover": { bgcolor: "#ff0000", color: "#fff" },
                        }}
                      >
                        [ INITIALIZE_PREVIEW ]
                      </Button>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ==================== SECCIÓN 3: CONTACTO ==================== */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          borderTop: "1px dashed rgba(255,0,0,0.3)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#ff0000",
                  mb: 4,
                  fontFamily: "monospace",
                  fontSize: { xs: "1.5rem", md: "2.125rem" },
                  wordBreak: "break-word",
                }}
              >
                {">"} ACCESS_CONTACT_REGISTRY
              </Typography>
              <Box
                sx={{
                  color: "#a0a0a0",
                  fontFamily: "monospace",
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
                }}
              >
                <Typography sx={{ mb: 2 }}>
                  <span style={{ color: "#ff0000" }}>NAME:</span> LUIS MATEO
                  MICHEL FLORES
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  <span style={{ color: "#ff0000" }}>LOCATION:</span> LA PAZ,
                  BOLIVIA [16.5° S, 68.1° W]
                </Typography>
                <Typography sx={{ mb: 2, wordBreak: "break-all" }}>
                  <span style={{ color: "#ff0000" }}>EMAIL:</span>{" "}
                  MATEO8MICHEL8@GMAIL.COM
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  <span style={{ color: "#ff0000" }}>CITIZENSHIP:</span>{" "}
                  BOLIVIAN / SPANISH (EU_PASSPORT)
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  <span style={{ color: "#ff0000" }}>STATUS:</span>{" "}
                  AVAILABLE_FOR_OPERATIONS
                </Typography>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 3 },
              }}
            >
              <Button
                href="https://www.linkedin.com/in/mateo-michel"
                target="_blank"
                sx={{
                  border: "1px solid #ff0000",
                  color: "#ff0000",
                  py: { xs: 1.5, sm: 2 },
                  justifyContent: "center",
                  px: 3,
                  borderRadius: 0,
                  "&:hover": { bgcolor: "rgba(255,0,0,0.1)" },
                }}
              >
                [ LINKEDIN_UPLINK ]
              </Button>
              <Button
                href="https://github.com/Bussy888"
                target="_blank"
                sx={{
                  border: "1px solid #ff0000",
                  color: "#ff0000",
                  py: { xs: 1.5, sm: 2 },
                  justifyContent: "center",
                  px: 3,
                  borderRadius: 0,
                  "&:hover": { bgcolor: "rgba(255,0,0,0.1)" },
                }}
              >
                [ GITHUB_REPOSITORY ]
              </Button>
              <Button
                variant="contained"
                component="a"
                href="/CV_Mateo_Michel.pdf"
                download="Mateo_Michel_CV_Decrypted.pdf"
                sx={{
                  bgcolor: "#ff0000",
                  color: "#fff",
                  py: { xs: 1.5, sm: 2 },
                  px: 3,
                  justifyContent: "center",
                  borderRadius: 0,
                  "&:hover": { bgcolor: "#cc0000" },
                }}
              >
                DOWNLOAD_CV_DECRYPTED (PDF)
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* ==================== SECCIÓN 4: FOOTER (ACTUALIZADO CON ICONOS) ==================== */}
      <Box
        component="footer"
        sx={{
          py: { xs: 4, md: 5 },
          borderTop: "1px solid rgba(255,0,0,0.2)",
          bgcolor: "#020202", // Un negro un poco más profundo
          textAlign: "center",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 3,
            }}
          >
            {/* COPYRIGHT Y MARCA REGISTRADA */}
            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <Typography
                sx={{
                  color: "#a0a0a0",
                  fontFamily: "monospace",
                  fontSize: { xs: "0.75rem", sm: "0.85rem" },
                  mb: 0.5,
                }}
              >
                © {new Date().getFullYear()} LUIS MATEO MICHEL FLORES.
              </Typography>
              <Typography
                sx={{
                  color: "#ff0000",
                  fontFamily: "monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.05em",
                  opacity: 0.7,
                }}
              >
                // ALL_RIGHTS_RESERVED
              </Typography>
            </Box>

            {/* REDES SOCIALES CON ICONOS ROJOS */}
            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, sm: 2.5 }, // Un poco menos de espacio para que quepan bien los iconos
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  name: "GITHUB",
                  url: "https://github.com/Bussy888",
                  Icon: GitHubIcon,
                },
                {
                  name: "LINKEDIN",
                  url: "https://www.linkedin.com/in/mateo-michel",
                  Icon: LinkedInIcon,
                },
                {
                  name: "INSTAGRAM",
                  url: "https://www.instagram.com/mateomichel?igsh=MWRyODF3YWp3NWlybQ==L",
                  Icon: InstagramIcon,
                },
                {
                  name: "WHATSAPP",
                  url: "https://wa.me/59170594444",
                  Icon: WhatsAppIcon,
                }, // Recuerda tu formato internacional
                {
                  name: "EMAIL",
                  url: "mailto:MATEO8MICHEL8@GMAIL.COM",
                  Icon: EmailIcon,
                },
              ].map((social, idx) => (
                <Box
                  key={idx}
                  component="a"
                  href={social.url}
                  target={social.name === "EMAIL" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.name} // Accesibilidad
                  sx={{
                    color: "#ff0000",
                    textDecoration: "none",
                    fontFamily: "monospace",
                    display: "flex", // Para alinear corchetes e icono
                    alignItems: "center",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      color: "#fff",
                      textShadow: "0 0 10px rgba(255,0,0,0.8)",
                      transform: "translateY(-2px)", // Pequeña animación al hover
                    },
                    "&:hover .social-icon": {
                      color: "#fff", // El icono también cambia a blanco al hover
                    },
                  }}
                >
                  {/* Corchete de apertura */}
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "inherit",
                      color: "inherit",
                    }}
                  >
                    [
                  </Typography>

                  {/* El Icono - Forzado a ROJO */}
                  <social.Icon
                    className="social-icon"
                    sx={{
                      fontSize: { xs: "1.1rem", sm: "1.2rem" }, // Tamaño del logo
                      mx: 0.5, // Margen horizontal entre corchetes
                      color: "#ff0000", // <--- AQUÍ FORZAMOS EL ROJO
                      transition: "color 0.2s ease-in-out",
                    }}
                  />

                  {/* Corchete de cierre */}
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "inherit",
                      color: "inherit",
                    }}
                  >
                    ]
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* FIRMA DE DESARROLLO */}
          <Box sx={{ mt: 4, pt: 3, borderTop: "1px dashed rgba(255,0,0,0.1)" }}>
            <Typography
              sx={{
                color: "#ff0000",
                fontFamily: "monospace",
                fontSize: "0.6rem",
                opacity: 0.5,
                letterSpacing: "0.2em",
              }}
            >
              SYS.DEV_SIGNATURE: DEVELOPED_BY_MATEO_MICHEL
            </Typography>
          </Box>
        </Container>
      </Box>
      {/* ==================== SYSTEM MODAL: RESUME VIEWER ==================== */}
      <Modal
        open={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        aria-labelledby="resume-viewer"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(8px)",
          bgcolor: "rgba(0,0,0,0.8)",
          p: { xs: 1, sm: 2 },
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            width: "100%",
            maxWidth: "1000px",
            height: "85vh",
            outline: "none",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: "#050000",
              border: "2px solid #ff0000",
              boxShadow: "0 0 30px rgba(255,0,0,0.4)",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1.5,
                borderBottom: "1px solid #ff0000",
                bgcolor: "rgba(255,0,0,0.15)",
              }}
            >
              <Typography
                sx={{
                  color: "#ff0000",
                  fontFamily: "monospace",
                  fontSize: { xs: "0.6rem", sm: "0.9rem" },
                  letterSpacing: "1px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {">"} DECRYPTING_FILE: CV... [SUCCESS]
              </Typography>
              <Button
                onClick={() => setIsResumeOpen(false)}
                sx={{
                  color: "#ff0000",
                  minWidth: "auto",
                  p: "2px 8px",
                  fontFamily: "monospace",
                  fontSize: { xs: "0.7rem", sm: "0.9rem" },
                  border: "1px solid transparent",
                  "&:hover": { borderColor: "#ff0000", color: "#fff" },
                }}
              >
                [ CLOSE ]
              </Button>
            </Box>
            <Box
              sx={{ flexGrow: 1, p: { xs: 0.5, sm: 2 }, position: "relative" }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%)",
                  backgroundSize: "100% 4px",
                  pointerEvents: "none",
                  zIndex: 10,
                }}
              />
              <iframe
                src="/CV_Mateo_Michel.pdf"
                width="100%"
                height="100%"
                style={{ border: "none", filter: "contrast(1.1)" }}
                title="Mateo Resume Viewer"
              />
            </Box>
          </Box>
        </motion.div>
      </Modal>
    </Box>
  );
}
