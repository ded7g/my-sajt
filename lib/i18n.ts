export type Locale = "en" | "ru" | "sk"

export const locales: Locale[] = ["en", "ru", "sk"]

export const defaultLocale: Locale = "en"

// IP-based locale detection mapping (simplified for demo)
export const countryToLocale: Record<string, Locale> = {
  // English-speaking countries
  US: "en",
  GB: "en",
  CA: "en",
  AU: "en",
  NZ: "en", // New Zealand
  IE: "en", // Ireland
  ZA: "en", // South Africa
  IN: "en", // India
  SG: "en", // Singapore

  // Russian-speaking countries
  RU: "ru",
  BY: "ru", // Belarus
  KZ: "ru", // Kazakhstan
  KG: "ru", // Kyrgyzstan
  TJ: "ru", // Tajikistan
  UZ: "ru", // Uzbekistan
  AM: "ru", // Armenia
  AZ: "ru", // Azerbaijan
  GE: "ru", // Georgia
  MD: "ru", // Moldova
  UA: "ru", // Ukraine

  // Slovak-speaking countries
  SK: "sk",
  CZ: "sk", // Czech Republic (similar language)
}

export interface Translations {
  nav: {
    home: string
    information: string
    pricing: string
    features: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  auth: {
    login: string
    register: string
    logout: string
    email: string
    password: string
    confirmPassword: string
    firstName: string
    lastName: string
    loginButton: string
    registerButton: string
    switchToRegister: string
    switchToLogin: string
    alreadyHaveAccount: string
    dontHaveAccount: string
    loginSuccess: string
    registerSuccess: string
    loginError: string
    registerError: string
    passwordMismatch: string
    emailExists: string
    invalidCredentials: string
    profile: string
    myProfile: string
    fillAllFields: string
    loginDescription: string
    enterPassword: string
    loggingIn: string
    noAccount: string
    registerLink: string
    registerDescription: string
    enterFirstName: string
    enterLastName: string
    enterEmail: string
    confirmYourPassword: string
    registering: string
    haveAccount: string
    loginLink: string
    name: string
    yourName: string
    minCharacters: string
    repeatPassword: string
    userExists: string
    passwordTooShort: string
    nicknameHelp: string
    dataStorageInfo: string
  }
  experience: {
    level: string
    experience: string
    experienceShort: string
    nextLevel: string
    progress: string
    locked: string
    unlocked: string
    requiresExperience: string
    readingTime: string
    earnExperience: string
    experienceEarned: string
    totalReadingTime: string
    blocksUnlocked: string
    currentLevel: string
    experienceToNext: string
    accountSettings: string
    learningStats: string
    unlockedContent: string
    achievements: string
    readingProgress: string
    minutesRead: string
    experienceGained: string
    contentAccessed: string
  }
  informationBlocks: {
    basicNutrition: {
      title: string
      description: string
      content: string
    }
    exerciseBasics: {
      title: string
      description: string
      content: string
    }
    sleepHygiene: {
      title: string
      description: string
      content: string
    }
    stressManagement: {
      title: string
      description: string
      content: string
    }
    heartHealth: {
      title: string
      description: string
      content: string
    }
    mentalWellness: {
      title: string
      description: string
      content: string
    }
  }
  information: {
    title: string
    subtitle: string
    categories: {
      title: string
      subtitle: string
    }
    trust: {
      title: string
      subtitle: string
      medicallyReviewed: string
      medicallyReviewedDesc: string
      evidenceBased: string
      evidenceBasedDesc: string
      regularlyUpdated: string
      regularlyUpdatedDesc: string
    }
    healthCategories: {
      cardiovascular: {
        title: string
        description: string
      }
      nutrition: {
        title: string
        description: string
      }
      mental: {
        title: string
        description: string
      }
      fitness: {
        title: string
        description: string
      }
      preventive: {
        title: string
        description: string
      }
      aging: {
        title: string
        description: string
      }
    }
    badges: {
      popular: string
      updated: string
      expert: string
      trending: string
      essential: string
      new: string
    }
    buttons: {
      browseAll: string
      searchArticles: string
      explore: string
    }
  }
  features: {
    title: string
    subtitle: string
    items: {
      library: {
        title: string
        description: string
      }
      plans: {
        title: string
        description: string
      }
      tracking: {
        title: string
        description: string
      }
      consultations: {
        title: string
        description: string
      }
    }
  }
  pricing: {
    title: string
    subtitle: string
    plans: {
      basic: {
        name: string
        description: string
        features: string[]
      }
      premium: {
        name: string
        description: string
        badge: string
        features: string[]
      }
      professional: {
        name: string
        description: string
        badge: string
        features: string[]
      }
    }
    billing: {
      monthly: string
      annual: string
      save: string
    }
    faq: {
      title: string
      subtitle: string
      questions: {
        changePlan: {
          question: string
          answer: string
        }
        freeTrial: {
          question: string
          answer: string
        }
        payment: {
          question: string
          answer: string
        }
      }
    }
  }
  contact: {
    title: string
    subtitle: string
    methods: {
      title: string
      subtitle: string
      email: {
        title: string
        description: string
        action: string
      }
      phone: {
        title: string
        description: string
        action: string
      }
      chat: {
        title: string
        description: string
        action: string
      }
      consultation: {
        title: string
        description: string
        contact: string
        action: string
      }
    }
    form: {
      title: string
      subtitle: string
      firstName: string
      lastName: string
      email: string
      subject: string
      message: string
      messagePlaceholder: string
      send: string
    }
    office: {
      main: string
      hours: string
      findUs: string
    }
    faq: {
      title: string
      subtitle: string
      questions: {
        response: {
          question: string
          answer: string
        }
        consultation: {
          question: string
          answer: string
        }
        support: {
          question: string
          answer: string
        }
      }
    }
  }
  footer: {
    rights: string
    privacy: string
    terms: string
    support: string // Added support translation
  }
  common: {
    learnMore: string
    getStarted: string
    loading: string
    expertGuidance: string
    expertGuidanceDesc: string
    verifiedContent: string
    verifiedContentDesc: string
    communitySupport: string
    communitySupportDesc: string
    trackProgress: string
    trackProgressDesc: string
  }
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      information: "Information",
      pricing: "Pricing",
      features: "Features",
      contact: "Contact",
    },
    hero: {
      title: "Your Health Information Hub",
      subtitle: "Access premium health information and expert guidance to improve your wellbeing",
      cta: "Get Started",
    },
    auth: {
      login: "Login",
      register: "Register",
      logout: "Logout",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      firstName: "First Name",
      lastName: "Last Name",
      loginButton: "Sign In",
      registerButton: "Create Account",
      switchToRegister: "Create new account",
      switchToLogin: "Sign in to existing account",
      alreadyHaveAccount: "Already have an account?",
      dontHaveAccount: "Don't have an account?",
      loginSuccess: "Successfully logged in!",
      registerSuccess: "Account created successfully!",
      loginError: "Login failed. Please check your credentials.",
      registerError: "Registration failed. Please try again.",
      passwordMismatch: "Passwords do not match",
      emailExists: "Email already exists",
      invalidCredentials: "Invalid email or password",
      profile: "Profile",
      myProfile: "My Profile",
      fillAllFields: "Please fill in all fields",
      loginDescription: "Enter your credentials to access your account",
      enterPassword: "Enter your password",
      loggingIn: "Signing in...",
      noAccount: "Don't have an account?",
      registerLink: "Sign up",
      registerDescription: "Create a new account to get started",
      enterFirstName: "Enter your first name",
      enterLastName: "Enter your last name",
      enterEmail: "Enter your email address",
      confirmYourPassword: "Confirm your password",
      registering: "Creating account...",
      haveAccount: "Already have an account?",
      loginLink: "Sign in",
      name: "Nickname",
      yourName: "Enter your nickname",
      minCharacters: "Minimum 6 characters",
      repeatPassword: "Repeat your password",
      userExists: "User with this email already exists",
      passwordTooShort: "Password must be at least 6 characters",
      nicknameHelp: "This will be your display name in the system",
      dataStorageInfo: "Your data is stored locally in your browser",
    },
    experience: {
      level: "Level",
      experience: "Experience",
      experienceShort: "XP",
      nextLevel: "Next Level",
      progress: "Progress",
      locked: "Locked",
      unlocked: "Unlocked",
      requiresExperience: "Requires {exp} XP",
      readingTime: "Reading Time",
      earnExperience: "Earn 1 XP per minute of reading",
      experienceEarned: "Experience Earned",
      totalReadingTime: "Total Reading Time",
      blocksUnlocked: "Blocks Unlocked",
      currentLevel: "Current Level",
      experienceToNext: "XP to Next Level",
      accountSettings: "Account Settings",
      learningStats: "Learning Statistics",
      unlockedContent: "Unlocked Content",
      achievements: "Achievements",
      readingProgress: "Reading Progress",
      minutesRead: "Minutes Read",
      experienceGained: "Experience Gained",
      contentAccessed: "Content Accessed",
    },
    informationBlocks: {
      basicNutrition: {
        title: "Basic Nutrition",
        description: "Learn the fundamentals of healthy eating and balanced nutrition.",
        content:
          "Proper nutrition is the foundation of good health. A balanced diet should include a variety of foods from all food groups: fruits, vegetables, whole grains, lean proteins, and healthy fats. Understanding macronutrients (carbohydrates, proteins, and fats) and micronutrients (vitamins and minerals) helps you make informed food choices. Stay hydrated by drinking plenty of water throughout the day, and limit processed foods high in sugar, salt, and unhealthy fats.",
      },
      exerciseBasics: {
        title: "Exercise Fundamentals",
        description: "Discover the basics of physical fitness and exercise routines.",
        content:
          "Regular physical activity is essential for maintaining good health. The WHO recommends at least 150 minutes of moderate-intensity aerobic activity per week, plus muscle-strengthening activities twice a week. Start slowly and gradually increase intensity. Include cardiovascular exercises (walking, swimming, cycling), strength training (weights, resistance bands), and flexibility exercises (stretching, yoga). Always warm up before exercising and cool down afterward.",
      },
      sleepHygiene: {
        title: "Sleep Hygiene",
        description: "Master the art of quality sleep for better health and well-being.",
        content:
          "Quality sleep is crucial for physical and mental health. Adults need 7-9 hours of sleep per night. Establish a consistent sleep schedule by going to bed and waking up at the same time daily. Create a sleep-friendly environment: keep your bedroom cool, dark, and quiet. Avoid caffeine, large meals, and screens before bedtime. Develop a relaxing bedtime routine, such as reading or gentle stretching.",
      },
      stressManagement: {
        title: "Stress Management",
        description: "Learn effective techniques to manage and reduce stress in daily life.",
        content:
          "Chronic stress can negatively impact your health. Identify your stress triggers and develop healthy coping strategies. Practice relaxation techniques such as deep breathing, meditation, or progressive muscle relaxation. Regular exercise, adequate sleep, and social support are natural stress relievers. Time management and setting realistic goals can help prevent overwhelming situations. Don't hesitate to seek professional help if stress becomes unmanageable.",
      },
      heartHealth: {
        title: "Heart Health",
        description: "Understand cardiovascular health and how to maintain a healthy heart.",
        content:
          "Your heart is a vital organ that requires proper care. Maintain heart health through regular exercise, a balanced diet low in saturated fats and high in fruits and vegetables, and avoiding smoking. Monitor your blood pressure and cholesterol levels regularly. Manage stress effectively and maintain a healthy weight. Limit alcohol consumption and get adequate sleep. Know the warning signs of heart problems and seek medical attention when needed.",
      },
      mentalWellness: {
        title: "Mental Wellness",
        description: "Explore strategies for maintaining good mental health and emotional balance.",
        content:
          "Mental health is as important as physical health. Practice self-care by engaging in activities you enjoy and that relax you. Build and maintain strong social connections with family and friends. Learn to recognize signs of mental health issues such as persistent sadness, anxiety, or changes in behavior. Develop healthy coping mechanisms for life's challenges. Don't hesitate to seek professional help from a mental health provider when needed.",
      },
    },
    information: {
      title: "Health Information Library",
      subtitle:
        "Access our comprehensive collection of medically reviewed health information, expert guides, and evidence-based resources.",
      categories: {
        title: "Health Categories",
        subtitle: "Explore our expertly curated health information by category",
      },
      trust: {
        title: "Why Trust Our Information",
        subtitle: "Our health information meets the highest standards of accuracy and reliability",
        medicallyReviewed: "Medically Reviewed",
        medicallyReviewedDesc: "All content is reviewed by licensed healthcare professionals",
        evidenceBased: "Evidence-Based",
        evidenceBasedDesc: "Based on the latest scientific research and clinical studies",
        regularlyUpdated: "Regularly Updated",
        regularlyUpdatedDesc: "Content is continuously updated to reflect current medical knowledge",
      },
      healthCategories: {
        cardiovascular: {
          title: "Cardiovascular Health",
          description:
            "Comprehensive guides on heart health, blood pressure management, and cardiovascular disease prevention.",
        },
        nutrition: {
          title: "Nutrition & Diet",
          description: "Evidence-based nutrition information, meal planning guides, and dietary recommendations.",
        },
        mental: {
          title: "Mental Wellness",
          description: "Mental health resources, stress management techniques, and psychological wellbeing guides.",
        },
        fitness: {
          title: "Fitness & Exercise",
          description: "Workout routines, exercise science, and physical fitness programs for all levels.",
        },
        preventive: {
          title: "Preventive Care",
          description: "Preventive medicine, health screenings, and early detection strategies.",
        },
        aging: {
          title: "Healthy Aging",
          description: "Age-specific health advice, longevity research, and healthy aging strategies.",
        },
      },
      badges: {
        popular: "Popular",
        updated: "Updated",
        expert: "Expert",
        trending: "Trending",
        essential: "Essential",
        new: "New",
      },
      buttons: {
        browseAll: "Browse All Categories",
        searchArticles: "Search Articles",
        explore: "Explore",
      },
    },
    features: {
      title: "Why Choose Our Health Information",
      subtitle: "Trusted by thousands of users worldwide",
      items: {
        library: {
          title: "Comprehensive Health Library",
          description:
            "Access thousands of articles, guides, and resources covering all aspects of health and wellness.",
        },
        plans: {
          title: "Personalized Health Plans",
          description:
            "Get customized nutrition and fitness plans tailored to your specific health goals and conditions.",
        },
        tracking: {
          title: "Progress Tracking",
          description: "Monitor your health journey with detailed tracking tools and progress reports.",
        },
        consultations: {
          title: "Expert Consultations",
          description: "Connect with certified health professionals for personalized advice and guidance.",
        },
      },
    },
    pricing: {
      title: "Choose Your Plan",
      subtitle: "Flexible pricing for every need",
      plans: {
        basic: {
          name: "Basic",
          description: "Perfect for individuals starting their health journey",
          features: [
            "Access to basic health articles",
            "Monthly health newsletter",
            "Basic nutrition guides",
            "Community forum access",
            "Mobile app access",
          ],
        },
        premium: {
          name: "Premium",
          description: "Comprehensive health information for serious health enthusiasts",
          badge: "Most Popular",
          features: [
            "All Basic features",
            "Premium health content library",
            "Personalized health plans",
            "Expert consultation (1 per month)",
            "Advanced tracking tools",
            "Priority customer support",
            "Downloadable resources",
          ],
        },
        professional: {
          name: "Professional",
          description: "For healthcare professionals and serious health advocates",
          badge: "Best Value",
          features: [
            "All Premium features",
            "Professional-grade content",
            "Unlimited expert consultations",
            "Custom health assessments",
            "Advanced analytics dashboard",
            "White-label content access",
            "API access for integrations",
            "Dedicated account manager",
          ],
        },
      },
      billing: {
        monthly: "Monthly",
        annual: "Annual",
        save: "Save 20%",
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Common questions about our pricing and plans",
        questions: {
          changePlan: {
            question: "Can I change my plan anytime?",
            answer:
              "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
          },
          freeTrial: {
            question: "Is there a free trial available?",
            answer: "We offer a 14-day free trial for all plans. No credit card required to start your trial.",
          },
          payment: {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.",
          },
        },
      },
    },
    contact: {
      title: "Contact Us",
      subtitle:
        "Have questions about our health information platform? We're here to help you on your wellness journey.",
      methods: {
        title: "Get in Touch",
        subtitle: "Choose the best way to reach us",
        email: {
          title: "Email Support",
          description: "Get help via email within 24 hours",
          action: "Send Email",
        },
        phone: {
          title: "Phone Support",
          description: "Speak with our support team directly",
          action: "Call Now",
        },
        chat: {
          title: "Live Chat",
          description: "Chat with us in real-time",
          action: "Start Chat",
        },
        consultation: {
          title: "Expert Consultation",
          description: "Book a session with health experts",
          contact: "Premium members only",
          action: "Book Session",
        },
      },
      form: {
        title: "Send us a Message",
        subtitle: "Fill out the form below and we'll get back to you as soon as possible.",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        messagePlaceholder: "Tell us how we can help you...",
        send: "Send Message",
      },
      office: {
        main: "Main Office",
        hours: "Business Hours",
        findUs: "Find Us",
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Quick answers to common questions",
        questions: {
          response: {
            question: "How quickly will I receive a response?",
            answer:
              "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our phone support line.",
          },
          consultation: {
            question: "Can I schedule a consultation?",
            answer:
              "Yes! Premium and Professional plan members can book consultations with our health experts. Contact us to schedule your session.",
          },
          support: {
            question: "Do you offer technical support?",
            answer:
              "Absolutely. Our technical support team is available to help with any platform-related issues or questions you may have.",
          },
        },
      },
    },
    footer: {
      rights: "All rights reserved",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      support: "Support", // Added support translation
    },
    common: {
      learnMore: "Learn More",
      getStarted: "Get Started",
      loading: "Loading...",
      expertGuidance: "Expert Guidance",
      expertGuidanceDesc: "Professional health advice from certified experts",
      verifiedContent: "Verified Content",
      verifiedContentDesc: "All information is medically reviewed and verified",
      communitySupport: "Community Support",
      communitySupportDesc: "Join thousands of users on their health journey",
      trackProgress: "Track Progress",
      trackProgressDesc: "Monitor your health improvements over time",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      information: "Информация",
      pricing: "Цены",
      features: "Особенности",
      contact: "Контакты",
    },
    hero: {
      title: "Ваш центр информации о здоровье",
      subtitle: "Получите доступ к премиальной информации о здоровье и экспертным рекомендациям",
      cta: "Начать",
    },
    auth: {
      login: "Вход",
      register: "Регистрация",
      logout: "Выход",
      email: "Email",
      password: "Пароль",
      confirmPassword: "Подтвердите пароль",
      firstName: "Имя",
      lastName: "Фамилия",
      loginButton: "Войти",
      registerButton: "Создать аккаунт",
      switchToRegister: "Создать новый аккаунт",
      switchToLogin: "Войти в существующий аккаунт",
      alreadyHaveAccount: "Уже есть аккаунт?",
      dontHaveAccount: "Нет аккаунта?",
      loginSuccess: "Успешный вход в систему!",
      registerSuccess: "Аккаунт успешно создан!",
      loginError: "Ошибка входа. Проверьте данные.",
      registerError: "Ошибка регистрации. Попробуйте снова.",
      passwordMismatch: "Пароли не совпадают",
      emailExists: "Email уже существует",
      invalidCredentials: "Неверный email или пароль",
      profile: "Профиль",
      myProfile: "Мой профиль",
      fillAllFields: "Пожалуйста, заполните все поля",
      loginDescription: "Введите свои данные для входа в аккаунт",
      enterPassword: "Введите ваш пароль",
      loggingIn: "Вход в систему...",
      noAccount: "Нет аккаунта?",
      registerLink: "Зарегистрироваться",
      registerDescription: "Создайте новый аккаунт для начала работы",
      enterFirstName: "Введите ваше имя",
      enterLastName: "Введите вашу фамилию",
      enterEmail: "Введите ваш email адрес",
      confirmYourPassword: "Подтвердите ваш пароль",
      registering: "Создание аккаунта...",
      haveAccount: "Уже есть аккаунт?",
      loginLink: "Войти",
      name: "Никнейм",
      yourName: "Введите ваш никнейм",
      minCharacters: "Минимум 6 символов",
      repeatPassword: "Повторите ваш пароль",
      userExists: "Пользователь с таким email уже существует",
      passwordTooShort: "Пароль должен содержать минимум 6 символов",
      nicknameHelp: "Это будет ваше отображаемое имя в системе",
      dataStorageInfo: "Ваши данные сохраняются локально в браузере",
    },
    experience: {
      level: "Уровень",
      experience: "Опыт",
      experienceShort: "ОП",
      nextLevel: "Следующий уровень",
      progress: "Прогресс",
      locked: "Заблокировано",
      unlocked: "Разблокировано",
      requiresExperience: "Требуется {exp} ОП",
      readingTime: "Время чтения",
      earnExperience: "Получайте 1 ОП за минуту чтения",
      experienceEarned: "Получено опыта",
      totalReadingTime: "Общее время чтения",
      blocksUnlocked: "Разблокировано блоков",
      currentLevel: "Текущий уровень",
      experienceToNext: "ОП до следующего уровня",
      accountSettings: "Настройки аккаунта",
      learningStats: "Статистика обучения",
      unlockedContent: "Разблокированный контент",
      achievements: "Достижения",
      readingProgress: "Прогресс чтения",
      minutesRead: "Минут прочитано",
      experienceGained: "Получено опыта",
      contentAccessed: "Доступен контент",
    },
    informationBlocks: {
      basicNutrition: {
        title: "Основы питания",
        description: "Изучите основы здорового питания и сбалансированного рациона.",
        content:
          "Правильное питание - основа хорошего здоровья. Сбалансированная диета должна включать разнообразные продукты из всех групп: фрукты, овощи, цельнозерновые, нежирные белки и полезные жиры. Понимание макронутриентов (углеводы, белки и жиры) и микронутриентов (витамины и минералы) поможет вам делать осознанный выбор продуктов. Поддерживайте водный баланс, выпивая достаточно воды в течение дня, и ограничьте обработанные продукты с высоким содержанием сахара, соли и вредных жиров.",
      },
      exerciseBasics: {
        title: "Основы упражнений",
        description: "Откройте для себя основы физической подготовки и программ упражнений.",
        content:
          "Регулярная физическая активность необходима для поддержания хорошего здоровья. ВОЗ рекомендует минимум 150 минут аэробной активности умеренной интенсивности в неделю, плюс упражнения для укрепления мышц дважды в неделю. Начинайте медленно и постепенно увеличивайте интенсивность. Включите кардиоупражнения (ходьба, плавание, велосипед), силовые тренировки (веса, эспандеры) и упражнения на гибкость (растяжка, йога). Всегда разминайтесь перед тренировкой и делайте заминку после.",
      },
      sleepHygiene: {
        title: "Гигиена сна",
        description: "Овладейте искусством качественного сна для лучшего здоровья и самочувствия.",
        content:
          "Качественный сон крайне важен для физического и психического здоровья. Взрослым необходимо 7-9 часов сна в сутки. Установите постоянный режим сна, ложась спать и просыпаясь в одно и то же время каждый день. Создайте благоприятную для сна обстановку: поддерживайте в спальне прохладу, темноту и тишину. Избегайте кофеина, обильной пищи и экранов перед сном. Разработайте расслабляющий ритуал перед сном, например, чтение или легкую растяжку.",
      },
      stressManagement: {
        title: "Управление стрессом",
        description: "Изучите эффективные техники управления и снижения стресса в повседневной жизни.",
        content:
          "Хронический стресс может негативно влиять на ваше здоровье. Определите триггеры стресса и разработайте здоровые стратегии преодоления. Практикуйте техники релаксации, такие как глубокое дыхание, медитация или прогрессивная мышечная релаксация. Регулярные упражнения, достаточный сон и социальная поддержка - естественные способы снятия стресса. Управление временем и постановка реалистичных целей помогут избежать перегрузки. Не стесняйтесь обращаться за профессиональной помощью, если стресс становится неуправляемым.",
      },
      heartHealth: {
        title: "Здоровье сердца",
        description: "Понимание сердечно-сосудистого здоровья и способов поддержания здорового сердца.",
        content:
          "Ваше сердце - жизненно важный орган, требующий правильного ухода. Поддерживайте здоровье сердца через регулярные упражнения, сбалансированную диету с низким содержанием насыщенных жиров и высоким содержанием фруктов и овощей, избегайте курения. Регулярно контролируйте артериальное давление и уровень холестерина. Эффективно управляйте стрессом и поддерживайте здоровый вес. Ограничьте потребление алкоголя и получайте достаточный сон. Знайте предупреждающие признаки проблем с сердцем и обращайтесь за медицинской помощью при необходимости.",
      },
      mentalWellness: {
        title: "Психическое благополучие",
        description: "Изучите стратегии поддержания хорошего психического здоровья и эмоционального баланса.",
        content:
          "Психическое здоровье так же важно, как и физическое. Практикуйте самопомощь, занимаясь деятельностью, которая вам нравится и расслабляет. Стройте и поддерживайте крепкие социальные связи с семьей и друзьями. Учитесь распознавать признаки проблем с психическим здоровьем, такие как постоянная грусть, тревога или изменения в поведении. Развивайте здоровые механизмы преодоления жизненных трудностей. Не стесняйтесь обращаться за профессиональной помощью к специалисту по психическому здоровью при необходимости.",
      },
    },
    information: {
      title: "Библиотека информации о здоровье",
      subtitle:
        "Получите доступ к нашей обширной коллекции медицински проверенной информации о здоровье, экспертных руководств и научно обоснованных ресурсов.",
      categories: {
        title: "Категории здоровья",
        subtitle: "Изучите нашу экспертно подобранную информацию о здоровье по категориям",
      },
      trust: {
        title: "Почему доверять нашей информации",
        subtitle: "Наша информация о здоровье соответствует самым высоким стандартам точности и надежности",
        medicallyReviewed: "Медицински проверено",
        medicallyReviewedDesc: "Весь контент проверяется лицензированными медицинскими работниками",
        evidenceBased: "Научно обосновано",
        evidenceBasedDesc: "Основано на последних научных исследованиях и клинических испытаниях",
        regularlyUpdated: "Регулярно обновляется",
        regularlyUpdatedDesc: "Контент постоянно обновляется, чтобы отражать современные медицинские знания",
      },
      healthCategories: {
        cardiovascular: {
          title: "Здоровье сердечно-сосудистой системы",
          description:
            "Комплексные руководства по здоровью сердца, управлению артериальным давлением и профилактике сердечно-сосудистых заболеваний.",
        },
        nutrition: {
          title: "Питание и диета",
          description:
            "Научно обоснованная информация о питании, руководства по планированию питания и диетические рекомендации.",
        },
        mental: {
          title: "Психическое благополучие",
          description:
            "Ресурсы по психическому здоровью, техники управления стрессом и руководства по психологическому благополучию.",
        },
        fitness: {
          title: "Фитнес и упражнения",
          description:
            "Программы тренировок, наука о физических упражнениях и программы физической подготовки для всех уровней.",
        },
        preventive: {
          title: "Профилактическая медицина",
          description: "Профилактическая медицина, медицинские обследования и стратегии раннего выявления.",
        },
        aging: {
          title: "Здоровое старение",
          description:
            "Советы по здоровью для разных возрастов, исследования долголетия и стратегии здорового старения.",
        },
      },
      badges: {
        popular: "Популярное",
        updated: "Обновлено",
        expert: "Эксперт",
        trending: "В тренде",
        essential: "Важное",
        new: "Новое",
      },
      buttons: {
        browseAll: "Просмотреть все категории",
        searchArticles: "Поиск статей",
        explore: "Изучить",
      },
    },
    features: {
      title: "Почему выбирают нашу информацию о здоровье",
      subtitle: "Нам доверяют тысячи пользователей по всему миру",
      items: {
        library: {
          title: "Полная библиотека здоровья",
          description:
            "Доступ к тысячам статей, руководств и ресурсов, охватывающих все аспекты здоровья и благополучия.",
        },
        plans: {
          title: "Персонализированные планы здоровья",
          description:
            "Получите индивидуальные планы питания и фитнеса, адаптированные к вашим конкретным целям и состоянию здоровья.",
        },
        tracking: {
          title: "Отслеживание прогресса",
          description:
            "Отслеживайте свой путь к здоровью с помощью детальных инструментов мониторинга и отчетов о прогрессе.",
        },
        consultations: {
          title: "Консультации экспертов",
          description:
            "Свяжитесь с сертифицированными специалистами по здоровью для получения персональных советов и рекомендаций.",
        },
      },
    },
    pricing: {
      title: "Выберите ваш план",
      subtitle: "Гибкие цены для любых потребностей",
      plans: {
        basic: {
          name: "Базовый",
          description: "Идеально для тех, кто начинает свой путь к здоровью",
          features: [
            "Доступ к базовым статьям о здоровье",
            "Ежемесячная рассылка о здоровье",
            "Базовые руководства по питанию",
            "Доступ к форуму сообщества",
            "Доступ к мобильному приложению",
          ],
        },
        premium: {
          name: "Премиум",
          description: "Полная информация о здоровье для серьезных энтузиастов",
          badge: "Самый популярный",
          features: [
            "Все функции Базового плана",
            "Премиум библиотека контента о здоровье",
            "Персонализированные планы здоровья",
            "Консультация эксперта (1 в месяц)",
            "Продвинутые инструменты отслеживания",
            "Приоритетная поддержка клиентов",
            "Загружаемые ресурсы",
          ],
        },
        professional: {
          name: "Профессиональный",
          description: "Для медицинских работников и серьезных защитников здоровья",
          badge: "Лучшее предложение",
          features: [
            "Все функции Премиум плана",
            "Контент профессионального уровня",
            "Неограниченные консультации экспертов",
            "Индивидуальные оценки здоровья",
            "Продвинутая панель аналитики",
            "Доступ к контенту под белой маркой",
            "API доступ для интеграций",
            "Выделенный менеджер аккаунта",
          ],
        },
      },
      billing: {
        monthly: "Ежемесячно",
        annual: "Ежегодно",
        save: "Экономия 20%",
      },
      faq: {
        title: "Часто задаваемые вопросы",
        subtitle: "Общие вопросы о наших ценах и планах",
        questions: {
          changePlan: {
            question: "Могу ли я изменить свой план в любое время?",
            answer:
              "Да, вы можете повысить или понизить свой план в любое время. Изменения будут отражены в следующем расчетном периоде.",
          },
          freeTrial: {
            question: "Доступна ли бесплатная пробная версия?",
            answer:
              "Мы предлагаем 14-дневную бесплатную пробную версию для всех планов. Кредитная карта не требуется для начала пробного периода.",
          },
          payment: {
            question: "Какие способы оплаты вы принимаете?",
            answer: "Мы принимаем все основные кредитные карты, PayPal и банковские переводы для годовых подписок.",
          },
        },
      },
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle:
        "Есть вопросы о нашей платформе медицинской информации? Мы здесь, чтобы помочь вам в вашем путешествии к здоровью.",
      methods: {
        title: "Свяжитесь с нами",
        subtitle: "Выберите лучший способ связаться с нами",
        email: {
          title: "Поддержка по электронной почте",
          description: "Получите помощь по электронной почте в течение 24 часов",
          action: "Отправить письмо",
        },
        phone: {
          title: "Телефонная поддержка",
          description: "Поговорите с нашей службой поддержки напрямую",
          action: "Позвонить",
        },
        chat: {
          title: "Живой чат",
          description: "Общайтесь с нами в режиме реальном времени",
          action: "Начать чат",
        },
        consultation: {
          title: "Консультация эксперта",
          description: "Забронируйте сессию с экспертами по здоровью",
          contact: "Только для премиум участников",
          action: "Забронировать сессию",
        },
      },
      form: {
        title: "Отправьте нам сообщение",
        subtitle: "Заполните форму ниже, и мы свяжемся с вами как можно скорее.",
        firstName: "Имя",
        lastName: "Фамилия",
        email: "Электронная почта",
        subject: "Тема",
        message: "Сообщение",
        messagePlaceholder: "Расскажите нам, как мы можем вам помочь...",
        send: "Отправить сообщение",
      },
      office: {
        main: "Главный офис",
        hours: "Рабочие часы",
        findUs: "Найти нас",
      },
      faq: {
        title: "Часто задаваемые вопросы",
        subtitle: "Быстрые ответы на общие вопросы",
        questions: {
          response: {
            question: "Как быстро я получу ответ?",
            answer:
              "Мы обычно отвечаем на все запросы в течение 24 часов в рабочие дни. По срочным вопросам, пожалуйста, звоните на нашу линию телефонной поддержки.",
          },
          consultation: {
            question: "Могу ли я запланировать консультацию?",
            answer:
              "Да! Участники планов Премиум и Профессиональный могут забронировать консультации с нашими экспертами по здоровью. Свяжитесь с нами, чтобы запланировать вашу сессию.",
          },
          support: {
            question: "Предоставляете ли вы техническую поддержку?",
            answer:
              "Абсолютно. Наша команда технической поддержки готова помочь с любыми вопросами или проблемами, связанными с платформой.",
          },
        },
      },
    },
    footer: {
      rights: "Все права защищены",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      support: "Поддержка", // Added support translation
    },
    common: {
      learnMore: "Узнать больше",
      getStarted: "Начать",
      loading: "Загрузка...",
      expertGuidance: "Экспертные рекомендации",
      expertGuidanceDesc: "Профессиональные советы по здоровью от сертифицированных экспертов",
      verifiedContent: "Проверенный контент",
      verifiedContentDesc: "Вся информация медицинско проверена и верифицирована",
      communitySupport: "Поддержка сообщества",
      communitySupportDesc: "Присоединяйтесь к тысячам пользователей в их путешествии к здоровью",
      trackProgress: "Отслеживание прогресса",
      trackProgressDesc: "Мониторинг улучшений вашего здоровья со временем",
    },
  },
  sk: {
    nav: {
      home: "Domov",
      information: "Informácie",
      pricing: "Ceny",
      features: "Vlastnosti",
      contact: "Kontakt",
    },
    hero: {
      title: "Vaše centrum zdravotných informácií",
      subtitle: "Získajte prístup k prémiových zdravotným informáciám a odborným radám",
      cta: "Začať",
    },
    auth: {
      login: "Prihlásenie",
      register: "Registrácia",
      logout: "Odhlásiť",
      email: "Email",
      password: "Heslo",
      confirmPassword: "Potvrdiť heslo",
      firstName: "Meno",
      lastName: "Priezvisko",
      loginButton: "Prihlásiť sa",
      registerButton: "Vytvoriť účet",
      switchToRegister: "Vytvoriť nový účet",
      switchToLogin: "Prihlásiť sa do existujúceho účtu",
      alreadyHaveAccount: "Už máte účet?",
      dontHaveAccount: "Nemáte účet?",
      loginSuccess: "Úspešne prihlásený!",
      registerSuccess: "Účet úspešne vytvorený!",
      loginError: "Chyba prihlásenia. Skontrolujte údaje.",
      registerError: "Chyba registrácie. Skúste znova.",
      passwordMismatch: "Heslá sa nezhodujú",
      emailExists: "Email už existuje",
      invalidCredentials: "Neplatný email alebo heslo",
      profile: "Profil",
      myProfile: "Môj profil",
      fillAllFields: "Prosím, vyplňte všetky polia",
      loginDescription: "Zadajte svoj e-mail a heslo pre prihlásenie",
      enterPassword: "Zadajte svoje heslo",
      loggingIn: "Prihlasovanie...",
      noAccount: "Nemáte účet?",
      registerLink: "Registrujte sa tu",
      registerDescription: "Zadajte svoje údaje pre vytvorenie účtu",
      enterFirstName: "Zadajte svoje meno",
      enterLastName: "Zadajte svoje priezvisko",
      enterEmail: "Zadajte svoj e-mail",
      confirmYourPassword: "Potvrďte svoje heslo",
      registering: "Registrácia...",
      haveAccount: "Už máte účet?",
      loginLink: "Prihláste sa tu",
      name: "Prezývka",
      yourName: "Zadajte svoju prezývku",
      minCharacters: "Minimálne 6 znakov",
      repeatPassword: "Zopakujte svoje heslo",
      userExists: "Používateľ s týmto emailom už existuje",
      passwordTooShort: "Heslo musí mať aspoň 6 znakov",
      nicknameHelp: "Toto bude vaše zobrazované meno v systéme",
      dataStorageInfo: "Vaše údaje sú uložené lokálne vo vašom prehliadači",
    },
    experience: {
      level: "Úroveň",
      experience: "Skúsenosti",
      experienceShort: "SK",
      nextLevel: "Ďalšia úroveň",
      progress: "Pokrok",
      locked: "Uzamknuté",
      unlocked: "Odomknuté",
      requiresExperience: "Vyžaduje {exp} SK",
      readingTime: "Čas čítania",
      earnExperience: "Získajte 1 SK za minútu čítania",
      experienceEarned: "Získané skúsenosti",
      totalReadingTime: "Celkový čas čítania",
      blocksUnlocked: "Odomknuté bloky",
      currentLevel: "Aktuálna úroveň",
      experienceToNext: "SK do ďalšej úrovne",
      accountSettings: "Nastavenia účtu",
      learningStats: "Štatistiky učenia",
      unlockedContent: "Odomknutý obsah",
      achievements: "Úspechy",
      readingProgress: "Pokrok v čítaní",
      minutesRead: "Minút prečítaných",
      experienceGained: "Získané skúsenosti",
      contentAccessed: "Prístupný obsah",
    },
    informationBlocks: {
      basicNutrition: {
        title: "Základy výživy",
        description: "Naučte sa základy zdravého stravovania a vyváženej výživy.",
        content:
          "Správna výživa je základom dobrého zdravia. Vyvážená strava by mala obsahovať rôznorodé potraviny zo všetkých skupín: ovocie, zeleninu, celozrnné produkty, chudé bielkoviny a zdravé tuky. Pochopenie makronutrientov (sacharidy, bielkoviny a tuky) a mikronutrientov (vitamíny a minerály) vám pomôže robiť informované rozhodnutia o potravinách. Udržujte hydratáciu pitím dostatočného množstva vody počas dня a obmedzte spracované potraviny s vysokým obsahom cukru, soli a nezdravých tukov.",
      },
      exerciseBasics: {
        title: "Základy cvičenia",
        description: "Objavte základy fyzickej kondície a cvičebných rutín.",
        content:
          "Pravidelná fyzická aktivita je nevyhnutná pre udržanie dobrého zdravia. WHO odporúča minimálne 150 minút aeróbnej aktivity strednej intenzity týždenne, plus aktivity na posilnenie svalov dvakrát týždenne. Začnite pomaly a postupne zvyšujte intenzitu. Zahrňte kardiovaskulárne cvičenia (chôdza, plávanie, cyklistika), silový tréning (závažia, odporové pásy) a cvičenia flexibility (strečing, joga). Vždy sa rozcvičte pred cvičením a po ňom sa uvoľnite.",
      },
      sleepHygiene: {
        title: "Hygiena spánku",
        description: "Ovládnite umenie kvalitného spánku pre lepšie zdravie a pohodu.",
        content:
          "Kvalitný spánok je kľúčový pre fyzické a duševné zdravie. Dospelí potrebujú 7-9 hodín spánku za noc. Vytvorte si konzistentný spánkový režim chodom do postele a vstávaním v rovnakom čase každý deň. Vytvorte prostredie priateľské pre spánok: udržujte spálňu chladnú, tmavú a tichú. Vyhýbajte sa kofeínu, veľkým jedlám a obrazovkám pred spaním. Vytvorte si relaxačnú rutinu pred spaním, ako je čítanie alebo jemné strečing.",
      },
      stressManagement: {
        title: "Zvládanie stresu",
        description: "Naučte sa efektívne techniky na zvládanie a znižovanie stresu v každodennom živote.",
        content:
          "Chronický stres môže negatívne ovplyvniť vaše zdravie. Identifikujte spúšťače stresu a vyvinite zdravé stratégie zvládania. Praktizujte relaxačné techniky ako hlboké dýchanie, meditáciu alebo progresívnu svalovú relaxáciu. Pravidelné cvičenie, dostatočný spánok a sociálna podpora sú prirodzené spôsoby úľavy od stresu. Riadenie času a stanovenie realistických cieľov môže pomôcť predísť preťažujúcim situáciám. Neváhajte vyhľadať profesionálnu pomoc, ak sa stres stane nezvládnuteľným.",
      },
      heartHealth: {
        title: "Zdravie srdca",
        description: "Pochopte kardiovaskulárne zdravie a ako udržať zdravé srdce.",
        content:
          "Vaše srdce je životne dôležitý orgán, ktorý vyžaduje správnu starostlivosť. Udržujte zdravie srdca prostredníctvom pravidelného cvičenia, vyváženej stravy s nízkym obsahom nasýtených tukov a vysokým obsahom ovocia a zeleniny, a vyhýbaním sa fajčeniu. Pravidelne monitorujte krvný tlak a hladinu cholesterolu. Efektívne zvládajte stres a udržujte zdravú hmotnosť. Obmedzte konzumáciu alkoholu a získajte dostatočný spánok. Poznajte varovné znaky problémov so srdcom a vyhľadajte lekársku pomoc pri potrebe.",
      },
      mentalWellness: {
        title: "Duševná pohoda",
        description: "Preskúmajte stratégie na udržanie dobrého duševného zdravia a emocionálnej rovnováhy.",
        content:
          "Duševné zdravie je rovnako dôležité ako fyzické zdravie. Praktizujte starostlivosť o seba zapájaním sa do aktivít, ktoré vás tešia a relaxujú. Budujte a udržujte silné sociálne spojenia s rodinou a priateľmi. Naučte sa rozpoznávať znaky problémov s duševným zdravím ako je pretrvávajúci smútok, úzkosť alebo zmeny v správaní. Vyvinite zdravé mechanizmy zvládania životných výziev. Neváhajte vyhľadať profesionálnu pomoc, ak sa duševné zdravie stane nezvládnuteľné.",
      },
    },
    information: {
      title: "Knižnica zdravotných informácií",
      subtitle:
        "Prístup k našej komplexnej kolekcii zdravotných informácií, odborným príručkám a zdrojom na základe dôkazov.",
      categories: {
        title: "Kategórie zdravotnosti",
        subtitle: "Preskúmajte našu expertne zberanú zdravotnú informáciu podľa kategórií",
      },
      trust: {
        title: "Prečo si môžete dôveriť našej informácii",
        subtitle: "Naša zdravotná informácia splňuje najvyššie štandardy presnosti a spolehlivosti",
        medicallyReviewed: "Medicínsky preverené",
        medicallyReviewedDesc: "Všetky obsahy sú preverené licencovanými zdravotníckymi pracovníkmi",
        evidenceBased: "Na základe dôkazov",
        evidenceBasedDesc: "Založené na najnovších vedeckých výskumoch a klinických štúdiách",
        regularlyUpdated: "Pravidelne aktualizované",
        regularlyUpdatedDesc: "Obsah je kontinuálne aktualizovaný, aby odražal aktuálne zdravotnícke znalosti",
      },
      healthCategories: {
        cardiovascular: {
          title: "Kardiovaskulárne zdravie",
          description:
            "Komplexné príručky o zdraví srdca, správani krvným tlakom a prevencii kardiovaskulárnych nemocí.",
        },
        nutrition: {
          title: "Výživa a diéta",
          description: "Informácie na základe dôkazov, príručky na plánovanie jedl, a odporúčania k diétám.",
        },
        mental: {
          title: "Duševná pohoda",
          description: "Zdroje na duševné zdravie, techniky na zvládanie stresu a príručky na duševnú pohodu.",
        },
        fitness: {
          title: "Fítness a cvičenia",
          description: "Cvičebné rutíny, vedecké znalosti o cvičení a programy fítnessu pre všetky úrovne.",
        },
        preventive: {
          title: "Prevencívna starostlivosť",
          description: "Prevencívna medicína, zdravotné kontroly a stratégie na rýchlejšie zistenie.",
        },
        aging: {
          title: "Zdravé staranie",
          description: "Rady na zdravie pre rôzne veky, vedecké štúdie na dlhový život a stratégie na zdravé staranie.",
        },
      },
      badges: {
        popular: "Populárne",
        updated: "Aktualizované",
        expert: "Expert",
        trending: "V trende",
        essential: "Základné",
        new: "Nové",
      },
      buttons: {
        browseAll: "Prehľad všetkých kategórií",
        searchArticles: "Vyhľadávanie článkov",
        explore: "Objavte",
      },
    },
    features: {
      title: "Prečo si vyberiete našu zdravotnú informáciu",
      subtitle: "Dôverované tisícami užívateľov po celom svete",
      items: {
        library: {
          title: "Komplexná knižnica zdravotnosti",
          description:
            "Prístup k tisícám článkov, príručiek a zdrojov pokrývajúcich všetky aspekty zdravotnosti a pohody.",
        },
        plans: {
          title: "Personalizované zdravotné plány",
          description:
            "Získajte prispôsobené plány na výživu a fítness prispôsobené vašim konkrétnym zdravotným cieľom a stavom.",
        },
        tracking: {
          title: "Sledovanie pokroku",
          description: "Sledujte svoju cestu k zdraviu pomocou detailných nástrojov sledovania a správ pokroku.",
        },
        consultations: {
          title: "Expertné konzultácie",
          description: "Spojte sa s certifikovanými zdravotníčkymi pracovníkmi pre personalizované rady a odporúčania.",
        },
      },
    },
    pricing: {
      title: "Vyberte si svoj plán",
      subtitle: "Flexibilné ceny pre každú potrebu",
      plans: {
        basic: {
          name: "Základný",
          description: "Ideálne pre ľudí začínajúcich svoju cestu k zdraviu",
          features: [
            "Prístup k základným článkom o zdraví",
            "Mesačná zdravotná správa",
            "Základné príručky na výživu",
            "Prístup k fóru komunity",
            "Prístup k mobilnému aplikácií",
          ],
        },
        premium: {
          name: "Premiálny",
          description: "Komplexná zdravotná informácia pre vážnych zdravotníckych entuziastov",
          badge: "Najpopulárnejšie",
          features: [
            "Všetky funkcie Základného plánu",
            "Premiálna knižnica zdravotných informácií",
            "Personalizované zdravotné plány",
            "Expertná konzultácia (1 za mesiac)",
            "Pokročilé nástroje sledovania",
            "Prioritná podpora klientov",
            "Stiahnite si zdroje",
          ],
        },
        professional: {
          name: "Profesionálny",
          description: "Pre zdravotníckych pracovníkov a vážnych zdravotníckych ochotníkov",
          badge: "Najlepšie ponúknanie",
          features: [
            "Všetky funkcie Premiálneho plánu",
            "Obsah profesionálneho úrovne",
            "Neobmedzené expertné konzultácie",
            "Vlastné hodnotenia zdravotnosti",
            "Pokročilá analytická plocha",
            "Prístup k obsahu pod bielou značkou",
            "Prístup k API pre integrácie",
            "Vyhradený manažér účtu",
          ],
        },
      },
      billing: {
        monthly: "Mesačne",
        annual: "Ročne",
        save: "Ušetríte 20%",
      },
      faq: {
        title: "Často kladené otázky",
        subtitle: "Obvykle kladené otázky o našich cienách a plánoch",
        questions: {
          changePlan: {
            question: "Môžem si kedykoľvek zmeniť svoj plán?",
            answer:
              "Áno, môžete si zvýšiť alebo znížiť svoj plán kedykoľvek. Zmeny budú odrazené v nasledujúcom fakturačnom cykle.",
          },
          freeTrial: {
            question: "Je dostupná bezplatná skúšobná verzia?",
            answer:
              "Ponúkame 14-dňovú bezplatnú skúšobnú verziu pre všetky plány. Kreditná karta nie je potrebná na začatie skúšobnej verzie.",
          },
          payment: {
            question: "Aké metódy platby prijímate?",
            answer: "Prijímame všetky hlavné kreditné karty, PayPal a bankové prevody pre ročné predplatné.",
          },
        },
      },
    },
    contact: {
      title: "Kontaktujte nás",
      subtitle:
        "Máte otázky na našu platformu zdravotných informácií? My sme tu, aby sme vám pomohli na vašej ceste k pohode.",
      methods: {
        title: "Kontaktujte nás",
        subtitle: "Vyberte najlepší spôsob kontaktu s nami",
        email: {
          title: "Podpora emailom",
          description: "Získajte pomoc emailom v rámci 24 hodín",
          action: "Poslať email",
        },
        phone: {
          title: "Telefonná podpora",
          description: "Mluvte s našou podporovou skupinou priamo",
          action: "Zavolajte teraz",
        },
        chat: {
          title: "Živý chat",
          description: "Obhajte s nami v reálnom čase",
          action: "Začať chat",
        },
        consultation: {
          title: "Expertná konzultácia",
          description: "Rezervujte si sériu s zdravotníčkymi expertmi",
          contact: "Iba pre užívateľov s premiálnym plánom",
          action: "Rezervovať sériu",
        },
      },
      form: {
        title: "Poslať nám správu",
        subtitle: "Vyplňte nižšie formulár a my vás čo najskôr kontaktujeme.",
        firstName: "Meno",
        lastName: "Priezvisko",
        email: "Email",
        subject: "Predmet",
        message: "Správa",
        messagePlaceholder: "Povedzte nám, ako vám môžeme pomôcť...",
        send: "Poslať správu",
      },
      office: {
        main: "Hlavný kancelársky úrad",
        hours: "Obchodné hodiny",
        findUs: "Nájdite nás",
      },
      faq: {
        title: "Často kladené otázky",
        subtitle: "Rýchle odpovede na obvykle kladené otázky",
        questions: {
          response: {
            question: "Kedy sa mi odpovie?",
            answer:
              "Obvykle odpovedáme na všetky žiadosti v rámci 24 hodín počas obchodných dní. Pre úrgentné veci, prosím, zavolajte na našu telefonickú podporovú čiaru.",
          },
          consultation: {
            question: "Môžem si rezervovať konzultáciu?",
            answer:
              "Áno! Užívatelia s premiálnym a profesionálnym plánom môžu rezervovať konzultácie s našimi zdravotníčkymi expertmi. Kontaktujte nás, aby ste rezervovali svoju sériu.",
          },
          support: {
            question: "Poskytujete technickú podporu?",
            answer:
              "Samozřejmě. Náš tím technickej podpory je pripravený pomôcť s ľubými otázkami alebo problémami spojenými s platformou.",
          },
        },
      },
    },
    footer: {
      rights: "Všetky práva vyhradené",
      privacy: "Politika ochrany osobných údajov",
      terms: "Podmienky používania",
      support: "Podpora", // Added support translation
    },
    common: {
      learnMore: "Ďalšie informácie",
      getStarted: "Začať",
      loading: "Načítavanie...",
      expertGuidance: "Expertná orientácia",
      expertGuidanceDesc: "Profesionálne zdravotné rady od certifikovaných expertov",
      verifiedContent: "Overený obsah",
      verifiedContentDesc: "Všetky informácie sú medicínsky preverené a overené",
      communitySupport: "Podpora komunity",
      communitySupportDesc: "Pripájajte sa k tisíciam užívateľov na svojej ceste k zdraviu",
      trackProgress: "Sledovanie pokroku",
      trackProgressDesc: "Sledujte zlepšenia vašej zdravotnosti v čase",
    },
  },
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations[defaultLocale]
}

export function detectLocaleFromIP(countryCode: string): Locale {
  return countryToLocale[countryCode] || defaultLocale
}

export function getUserLocationInfo() {
  // Simplified location detection for demo purposes
  // In a real app, you would use a geolocation service
  return {
    country: "US",
    locale: "en" as Locale,
  }
}
