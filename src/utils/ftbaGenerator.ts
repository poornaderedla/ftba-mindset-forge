
interface FtbaContent {
  feel: {
    title: string;
    description: string;
    visualization: string;
  };
  think: {
    title: string;
    description: string;
    affirmations: string[];
  };
  believe: {
    title: string;
    description: string;
    coreBeliefs: string[];
  };
  act: {
    title: string;
    description: string;
    actionSteps: string[];
  };
}

const ftbaDatabase: Record<string, Record<string, FtbaContent>> = {
  'teens': {
    'students': {
      feel: {
        title: 'Connect with Your Unlimited Potential',
        description: 'At this pivotal moment in your life, you have the power to shape your entire future. Feel the excitement of endless possibilities and the strength that comes from knowing you can become anyone you choose to be.',
        visualization: 'Close your eyes and see yourself 10 years from now, living your dream life. Feel the pride of your achievements and the gratitude for starting your journey today. Let this feeling of excitement and possibility fill every cell of your body.'
      },
      think: {
        title: 'Adopt the Growth Mindset of Champions',
        description: 'Your brain is like a muscle that grows stronger with every challenge. Replace limiting thoughts with empowering beliefs about your capacity to learn, grow, and achieve extraordinary things.',
        affirmations: [
          'Every challenge is making me stronger and smarter',
          'I am building the foundation for an extraordinary life',
          'My potential is unlimited, and I choose to unlock it daily',
          'I learn from every experience and use it to grow'
        ]
      },
      believe: {
        title: 'Embrace Your Destiny as a Future Leader',
        description: 'You are not just a student - you are a future leader, innovator, and change-maker. The world needs what you have to offer, and you have everything it takes to make a massive impact.',
        coreBeliefs: [
          'I am capable of achieving anything I set my mind to',
          'My education is my superpower for changing the world',
          'Every day I invest in learning, I invest in my future success',
          'I have unique talents that the world needs'
        ]
      },
      act: {
        title: 'Take Daily Action Toward Your Vision',
        description: 'Success is built through consistent daily actions. Start building habits now that will compound into extraordinary results over time.',
        actionSteps: [
          'Write down your 5-year vision and read it every morning',
          'Study with purpose - ask yourself how each lesson connects to your goals',
          'Network with people who inspire you and share your ambitions',
          'Develop one new skill each month that aligns with your vision',
          'Take care of your body and mind through exercise and mindfulness'
        ]
      }
    },
    'employees': {
      feel: {
        title: 'Embrace Your Professional Journey',
        description: 'Starting your career is an incredible achievement. Feel proud of your initiative and excited about the professional skills and relationships you\'re building. Every day at work is an investment in your future.',
        visualization: 'Imagine yourself five years from now, having mastered valuable skills and built meaningful professional relationships. Feel the confidence that comes from proving yourself capable and reliable in the working world.'
      },
      think: {
        title: 'Think Like a Future Executive',
        description: 'You\'re not just an employee - you\'re a professional in training. Approach every task as an opportunity to develop skills that will serve you throughout your entire career.',
        affirmations: [
          'I am building valuable skills with every task I complete',
          'I see opportunities where others see obstacles',
          'My work ethic and attitude set me apart from my peers',
          'I am creating my professional reputation with every interaction'
        ]
      },
      believe: {
        title: 'Your Career is Your Canvas',
        description: 'Believe that your first job is the foundation for an incredible career. You have the power to shape your professional identity and create opportunities for advancement.',
        coreBeliefs: [
          'Every role teaches me something valuable for my future',
          'I have the ability to advance quickly through dedication and excellence',
          'My career is a journey of continuous growth and learning',
          'I attract opportunities by being excellent at what I do'
        ]
      },
      act: {
        title: 'Build Your Professional Foundation',
        description: 'Take strategic actions that will accelerate your career growth and establish you as a rising star in your field.',
        actionSteps: [
          'Exceed expectations in every task, no matter how small',
          'Seek feedback actively and implement it immediately',
          'Build relationships with colleagues and mentors',
          'Learn skills beyond your job description',
          'Document your achievements and impact regularly'
        ]
      }
    }
  },
  'young-adults': {
    'students': {
      feel: {
        title: 'Harness the Power of Focused Ambition',
        description: 'This is your time to be laser-focused on building the foundation for your dream life. Feel the intensity of your ambition and the satisfaction that comes from knowing you\'re investing in your future every single day.',
        visualization: 'See yourself graduating not just with a degree, but with the skills, network, and mindset of a future leader. Feel the pride of knowing you maximized every opportunity during these crucial years.'
      },
      think: {
        title: 'Master the Mindset of Excellence',
        description: 'You\'re not just getting educated - you\'re preparing to compete at the highest levels. Think like someone who will shape industries and solve major problems.',
        affirmations: [
          'I am preparing for extraordinary success through deliberate practice',
          'Every skill I master now multiplies my future opportunities',
          'I attract mentors and opportunities through my commitment to excellence',
          'My education is my rocket fuel for changing the world'
        ]
      },
      believe: {
        title: 'You Are Tomorrow\'s Industry Leader',
        description: 'Believe that you\'re not just preparing for a job - you\'re preparing to revolutionize your field. Your generation will solve problems that previous generations couldn\'t imagine.',
        coreBeliefs: [
          'I have the potential to become a leader in my chosen field',
          'My unique perspective and skills are exactly what the world needs',
          'I can learn anything and master any skill I choose to focus on',
          'My network and knowledge are my greatest professional assets'
        ]
      },
      act: {
        title: 'Execute Your Strategic Advantage',
        description: 'Take actions that give you an unfair advantage over your peers and position you for extraordinary opportunities after graduation.',
        actionSteps: [
          'Build a portfolio of real-world projects in your field',
          'Seek internships and experiences with industry leaders',
          'Create content that demonstrates your expertise and passion',
          'Join professional organizations and attend industry events',
          'Develop a personal brand that showcases your unique value'
        ]
      }
    },
    'entrepreneurs': {
      feel: {
        title: 'Channel Your Entrepreneurial Fire',
        description: 'Feel the burning desire to create something meaningful and the excitement of building your own path. You have the energy and creativity to solve problems that others don\'t even see.',
        visualization: 'Picture yourself leading a thriving business that creates value for thousands of people. Feel the satisfaction of building something from nothing and the impact you\'re making on the world.'
      },
      think: {
        title: 'Adopt the Mindset of Value Creation',
        description: 'Think like someone who sees solutions everywhere. Every problem is an opportunity to create value, and every failure is valuable data for your next breakthrough.',
        affirmations: [
          'I see opportunities where others see problems',
          'Every setback teaches me what I need to know for massive success',
          'I have the creativity and persistence to build something amazing',
          'My business will create value for countless people'
        ]
      },
      believe: {
        title: 'You Are Destined to Build Something Great',
        description: 'Believe that your entrepreneurial instincts are your superpower. You have what it takes to build a business that doesn\'t just succeed financially, but creates meaningful impact.',
        coreBeliefs: [
          'I have unique insights that can solve real problems',
          'Failure is just feedback that helps me build better solutions',
          'I can learn any skill necessary to make my vision reality',
          'My business will create freedom and impact for me and others'
        ]
      },
      act: {
        title: 'Build Your Empire Step by Step',
        description: 'Take consistent action to validate your ideas, build your skills, and create momentum toward your entrepreneurial breakthrough.',
        actionSteps: [
          'Test your business idea with real customers before building',
          'Study successful entrepreneurs and model their strategies',
          'Build a minimum viable product and iterate based on feedback',
          'Network with other entrepreneurs and potential mentors',
          'Develop your financial literacy and business management skills'
        ]
      }
    }
  },
  'early-professionals': {
    'employees': {
      feel: {
        title: 'Embrace Your Professional Power',
        description: 'You\'ve proven yourself capable and now it\'s time to accelerate. Feel the confidence that comes from experience and the excitement of reaching for leadership roles.',
        visualization: 'See yourself being promoted to positions of increasing responsibility and influence. Feel the respect of colleagues and the satisfaction of leading teams to achieve ambitious goals.'
      },
      think: {
        title: 'Think Like a Strategic Leader',
        description: 'Move beyond task completion to strategic thinking. Consider how your work fits into larger business objectives and how you can create exponential value.',
        affirmations: [
          'I think strategically about business challenges and opportunities',
          'My leadership potential is recognized and valued by others',
          'I create solutions that have lasting positive impact',
          'I am becoming the professional others look up to and learn from'
        ]
      },
      believe: {
        title: 'You Are Leadership Material',
        description: 'Believe that you have the skills, judgment, and character to lead others and drive meaningful results. You\'re ready for greater responsibility and impact.',
        coreBeliefs: [
          'I have the skills and vision to lead teams to extraordinary results',
          'My career trajectory is accelerating because of my commitment to excellence',
          'I can handle any professional challenge through skill and determination',
          'I am creating opportunities for myself through outstanding performance'
        ]
      },
      act: {
        title: 'Accelerate Your Rise to Leadership',
        description: 'Take strategic actions that position you for rapid advancement and establish you as an indispensable leader in your organization.',
        actionSteps: [
          'Take on high-visibility projects that showcase your strategic thinking',
          'Mentor junior team members and build your leadership skills',
          'Develop expertise in areas critical to your company\'s success',
          'Build relationships with senior leaders and decision-makers',
          'Pursue advanced certifications or education in your field'
        ]
      }
    },
    'solopreneurs': {
      feel: {
        title: 'Own Your Independence and Impact',
        description: 'Feel the pride of building something entirely your own and the freedom that comes from controlling your destiny. You\'re creating value on your terms while building the lifestyle you want.',
        visualization: 'Picture yourself running a thriving solo business that gives you financial freedom and time flexibility. Feel the satisfaction of serving clients at the highest level while maintaining work-life balance.'
      },
      think: {
        title: 'Master the Efficiency Mindset',
        description: 'Think like someone who maximizes impact with minimal resources. Every hour and every decision should move you closer to your vision of success and freedom.',
        affirmations: [
          'I create maximum value with focused effort and smart strategies',
          'My expertise and personal brand attract ideal clients effortlessly',
          'I have the discipline and systems to scale my impact sustainably',
          'I am building both wealth and freedom through my solo business'
        ]
      },
      believe: {
        title: 'Your Expertise is Your Empire',
        description: 'Believe that your unique skills and knowledge can create significant wealth and impact. You don\'t need a large team - you need focus, systems, and relentless value creation.',
        coreBeliefs: [
          'My expertise and reputation are my most valuable assets',
          'I can create substantial income streams through focused specialization',
          'Solo entrepreneurship gives me the perfect blend of freedom and impact',
          'I attract opportunities by being exceptional at what I do'
        ]
      },
      act: {
        title: 'Scale Your Solo Success',
        description: 'Implement systems and strategies that allow you to increase impact and income without sacrificing the freedom that drew you to solo entrepreneurship.',
        actionSteps: [
          'Develop premium service offerings that command higher rates',
          'Create systems and templates that increase your efficiency',
          'Build a strong personal brand through content and networking',
          'Establish multiple income streams from your core expertise',
          'Set boundaries that protect your time and maintain work-life balance'
        ]
      }
    }
  },
  'mid-life': {
    'entrepreneurs': {
      feel: {
        title: 'Harness Your Peak Performance Power',
        description: 'You\'re at the perfect intersection of experience, network, and ambition. Feel the confidence that comes from years of learning and the excitement of building something truly significant.',
        visualization: 'See yourself leading a business that creates massive value and positive impact. Feel the pride of building something that will outlast you and the satisfaction of mentoring the next generation of leaders.'
      },
      think: {
        title: 'Think with Seasoned Strategic Vision',
        description: 'You have the wisdom to see patterns others miss and the experience to execute at the highest level. Think like someone who builds businesses that transform industries.',
        affirmations: [
          'My experience and network give me an unfair advantage in business',
          'I can see opportunities and solutions that younger entrepreneurs miss',
          'I have the wisdom to build sustainable, impactful businesses',
          'My leadership creates extraordinary results and develops others'
        ]
      },
      believe: {
        title: 'This is Your Legacy-Building Phase',
        description: 'Believe that your best work is ahead of you. You have the perfect combination of experience, resources, and motivation to create something truly extraordinary.',
        coreBeliefs: [
          'I am in my prime for creating businesses that matter',
          'My experience is my competitive advantage in the marketplace',
          'I can build companies that create lasting positive impact',
          'My success opens doors and creates opportunities for others'
        ]
      },
      act: {
        title: 'Build Your Legacy Business',
        description: 'Take actions that leverage your full capabilities to create a business that not only succeeds financially but also creates meaningful impact.',
        actionSteps: [
          'Focus on ventures that align with your values and create positive impact',
          'Leverage your network and reputation to accelerate growth',
          'Mentor and develop the next generation of entrepreneurs',
          'Build systems and culture that can scale beyond your direct involvement',
          'Balance aggressive growth with sustainable business practices'
        ]
      }
    },
    'parents': {
      feel: {
        title: 'Embrace Your Role as a Life Architect',
        description: 'Feel the profound responsibility and joy of shaping the next generation. You\'re not just raising children - you\'re developing future leaders who will change the world.',
        visualization: 'Picture your children as successful, confident adults who contribute positively to the world. Feel the pride of knowing that your guidance and example set them up for extraordinary lives.'
      },
      think: {
        title: 'Think Like a Generational Legacy Builder',
        description: 'Every interaction with your children is an opportunity to instill values, confidence, and capabilities that will serve them for a lifetime. Think long-term about the impact of your parenting.',
        affirmations: [
          'I am raising children who will make a positive difference in the world',
          'My example teaches my children that anything is possible',
          'I balance being supportive with helping them develop independence',
          'Every day I help my children build confidence and character'
        ]
      },
      believe: {
        title: 'Your Parenting is Your Greatest Achievement',
        description: 'Believe that raising confident, capable, caring children is the most important work you\'ll ever do. Your influence extends far beyond your immediate family.',
        coreBeliefs: [
          'I have the wisdom and love needed to raise extraordinary children',
          'My children have unlimited potential that I can help them discover',
          'The values I teach today will echo through generations',
          'I can balance being a great parent with pursuing my own growth'
        ]
      },
      act: {
        title: 'Intentionally Shape the Next Generation',
        description: 'Take deliberate actions that help your children develop the mindset, skills, and character they need to thrive in an uncertain world.',
        actionSteps: [
          'Model the behavior and mindset you want to see in your children',
          'Create regular opportunities for meaningful conversations and connection',
          'Expose your children to diverse experiences that broaden their perspective',
          'Teach them practical life skills and emotional intelligence',
          'Balance structure and freedom to help them develop independence'
        ]
      }
    }
  },
  'legacy-builders': {
    'retirees': {
      feel: {
        title: 'Embrace Your Wisdom and Freedom',
        description: 'Feel the satisfaction of a life well-lived and the excitement of having time to pursue what truly matters to you. This is your season of wisdom, contribution, and personal fulfillment.',
        visualization: 'See yourself using your experience and wisdom to make a meaningful difference in others\' lives. Feel the joy of having time for relationships, passions, and purposes that bring deep fulfillment.'
      },
      think: {
        title: 'Think Like a Wise Contributor',
        description: 'Your years of experience have given you unique insights and perspectives. Think about how you can share your wisdom and continue growing in ways that bring meaning.',
        affirmations: [
          'My experience and wisdom are valuable gifts I can share with others',
          'I have the freedom to focus on what brings me joy and purpose',
          'Every day is an opportunity to learn, grow, and contribute',
          'My legacy is built through the lives I touch and the wisdom I share'
        ]
      },
      believe: {
        title: 'Your Best Contributions May Still Be Ahead',
        description: 'Believe that retirement is not the end of your impact - it\'s the beginning of a new chapter where you can contribute in ways that are truly meaningful to you.',
        coreBeliefs: [
          'I have valuable knowledge and experience that can benefit others',
          'This phase of life offers unique opportunities for growth and contribution',
          'I can continue learning and pursuing new interests with passion',
          'My legacy is measured by the positive impact I have on others'
        ]
      },
      act: {
        title: 'Create Your Legacy of Wisdom',
        description: 'Take actions that allow you to share your wisdom, pursue your passions, and create meaningful connections while maintaining your health and vitality.',
        actionSteps: [
          'Mentor young people in your area of expertise',
          'Pursue learning opportunities in areas that genuinely interest you',
          'Volunteer for causes that align with your values',
          'Document and share your life experiences and lessons learned',
          'Maintain your physical and mental health through regular exercise and social connection'
        ]
      }
    }
  }
};

export function generateFtbaContent(ageGroup: string, category: string): FtbaContent {
  console.log(`Generating FTBA content for ${ageGroup} ${category}`);
  
  // Get specific content or fallback to a default
  const ageData = ftbaDatabase[ageGroup];
  if (!ageData) {
    console.warn(`No data found for age group: ${ageGroup}`);
    return getDefaultContent();
  }
  
  const content = ageData[category];
  if (!content) {
    console.warn(`No data found for category: ${category} in age group: ${ageGroup}`);
    return getDefaultContent();
  }
  
  return content;
}

function getDefaultContent(): FtbaContent {
  return {
    feel: {
      title: 'Connect with Your Inner Power',
      description: 'Feel the strength that comes from knowing you have unlimited potential to grow and achieve your goals.',
      visualization: 'Imagine yourself living your ideal life. Feel the emotions of that success and let them motivate you today.'
    },
    think: {
      title: 'Adopt Empowering Thoughts',
      description: 'Replace limiting beliefs with thoughts that support your growth and success.',
      affirmations: [
        'I have the power to create positive change in my life',
        'Every challenge is an opportunity to grow stronger',
        'I am capable of achieving my goals through consistent action'
      ]
    },
    believe: {
      title: 'Embrace Your Potential',
      description: 'Believe in your ability to learn, grow, and create the life you desire.',
      coreBeliefs: [
        'I have unique gifts and talents to offer the world',
        'I can learn and master any skill I choose to focus on',
        'My consistent efforts will compound into extraordinary results'
      ]
    },
    act: {
      title: 'Take Aligned Action',
      description: 'Take daily actions that move you closer to your vision and goals.',
      actionSteps: [
        'Set clear, specific goals and review them daily',
        'Take at least one action each day toward your most important goal',
        'Learn continuously and apply new knowledge immediately'
      ]
    }
  };
}
