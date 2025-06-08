
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface FtbaDisplayProps {
  content: {
    feel: {
      title: string;
      description: string;
      visualization: string;
      affirmations: string[];
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
      affirmations: string[];
    };
    act: {
      title: string;
      description: string;
      actionSteps: string[];
      affirmations: string[];
    };
  };
  age: string;
  category: string;
}

export const FtbaDisplay: React.FC<FtbaDisplayProps> = ({ content, age, category }) => {
  const sections = [
    {
      key: 'feel',
      title: 'FEEL',
      color: 'from-red-500 to-pink-500',
      icon: '❤️',
      data: content.feel
    },
    {
      key: 'think',
      title: 'THINK',
      color: 'from-blue-500 to-cyan-500',
      icon: '🧠',
      data: content.think
    },
    {
      key: 'believe',
      title: 'BELIEVE',
      color: 'from-green-500 to-emerald-500',
      icon: '💎',
      data: content.believe
    },
    {
      key: 'act',
      title: 'ACT',
      color: 'from-purple-500 to-violet-500',
      icon: '⚡',
      data: content.act
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-6 py-2">
          Your Personalized Blueprint
        </Badge>
        <h2 className="text-4xl font-bold mb-4">
          Your <span className="gradient-text">FTBA Transformation</span> Framework
        </h2>
        <p className="text-lg text-muted-foreground">
          Tailored specifically for your journey as a <strong className="text-primary">{category}</strong> in the <strong className="text-primary">{age}</strong> stage
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {sections.map((section, index) => (
          <Card key={section.key} className="motivation-card group hover:scale-[1.02] transition-all duration-500">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform`}>
                  {section.icon}
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-primary">{section.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{section.data.title}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground leading-relaxed">
                {section.data.description}
              </p>

              <Separator className="bg-border/30" />

              {section.key === 'feel' && (
                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    🎯 Visualization Practice
                  </h4>
                  <p className="text-sm text-muted-foreground bg-card/50 p-4 rounded-lg border border-border/30">
                    {content.feel.visualization}
                  </p>
                </div>
              )}

              {section.key === 'believe' && (
                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    🔥 Core Beliefs to Adopt
                  </h4>
                  <div className="space-y-2">
                    {content.believe.coreBeliefs.map((belief, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-muted-foreground font-medium">{belief}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.key === 'act' && (
                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    🚀 Immediate Action Steps
                  </h4>
                  <div className="space-y-3">
                    {content.act.actionSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm bg-primary/5 p-3 rounded-lg border border-primary/20">
                        <span className="bg-primary text-background w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-foreground font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Power Affirmations for all sections */}
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  💫 Power Affirmations
                </h4>
                <div className="space-y-2">
                  {section.data.affirmations.map((affirmation, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm bg-gradient-to-r from-primary/5 to-primary/10 p-3 rounded-lg border border-primary/20">
                      <span className="text-primary mt-1 text-base">✨</span>
                      <span className="text-foreground font-medium italic">"{affirmation}"</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Card className="motivation-card bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30">
          <CardContent className="py-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Your Transformation Journey Starts Now
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Remember: Transformation happens in the daily practice of these principles. 
              Review your FTBA blueprint daily, visualize your success, and take consistent action. 
              Your future self is counting on the decisions you make today.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/30 max-w-xl mx-auto">
              <p className="text-sm text-primary font-semibold mb-2">💡 Daily Practice Tip:</p>
              <p className="text-sm text-muted-foreground">
                Read your affirmations aloud each morning with conviction and emotion. 
                Feel the truth of each statement as you speak it into existence.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
