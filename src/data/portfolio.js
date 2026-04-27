import vrProject from '../assets/vr_project.png';
import racingProject from '../assets/racing_project.png';

export const portfolioData = {
  personalInfo: {
    name: "Mustafa Abbas",
    role: "Game and XR Developer",
    tagline: "Extensive experience in gameplay programming, multiplayer systems, UI/UX, and Virtual Reality.",
    location: "New Delhi, India",
    email: "ma1243806@gmail.com",
    github: "https://github.com/Abazz9149",
    linkedin: "https://www.linkedin.com/in/mustafa-abbas-237654381?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  skills: {
    languages: ["C", "C++", "C#", "Java", "JavaScript", "Dart (Flutter)", "MERN Stack"],
    tools: ["Git", "Postman", "Unity Editor", "Flutter", "OpenXR", "Oculus SDK"],
    development: ["Multiplayer Systems", "AI", "UI/UX Integration", "Performance Optimization", "VR/XR Interaction Systems"]
  },
  experience: [
    {
      role: "VR Developer",
      company: "Sarvagya Institute",
      period: "Nov 2025 – Present",
      location: "New Delhi, India",
      description: "Developed immersive VR applications using Unity and OpenXR for Oculus platforms. Designed the C&C Machine Operation Module, an interactive VR training simulator."
    },
    {
      role: "Unity Game Developer Intern",
      company: "TechWorld Solutions",
      period: "Jul 2025 – Sep 2025",
      location: "Faridabad, Haryana",
      description: "Developed 2D game features in Unity using C#. Implemented multiplayer functionality and AI logic."
    }
  ],
  projects: [
    {
      title: "C&C Machine Operation Module",
      category: "VR / XR",
      image: vrProject,
      description: "OpenXR integration for cross-platform compatibility. Features high-fidelity realistic 3D machine interactions.",
      tags: ["Unity", "OpenXR", "Oculus SDK"]
    },
    {
      title: "Car Racing Game",
      category: "Game Dev",
      image: racingProject,
      description: "Features realistic vehicle physics and multiple tracks. Optimized for high frame rates and performance.",
      tags: ["Unity", "C#"],
      github: "https://github.com/nullonestudio/Project-Speed-2.git"
    }
  ]
};
