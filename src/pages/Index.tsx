
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { FtbaDisplay } from '@/components/FtbaDisplay';
import { generateFtbaContent } from '@/utils/ftbaGenerator';

const Index = () => {
  const [selectedAge, setSelectedAge] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [ftbaContent, setFtbaContent] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const ageCategories = [
    { value: 'teens', label: '13–18 (Teens/Students)', description: 'Building foundation & discovering potential' },
    { value: 'young-adults', label: '19–25 (Young Adults)', description: 'College & career starters' },
    { value: 'early-professionals', label: '26–35 (Early Professionals)', description: 'Startups & rapid growth phase' },
    { value: 'mid-life', label: '36–50 (Mid-life Growth Seekers)', description: 'Peak performance & leadership' },
    { value: 'legacy-builders', label: '51+ (Legacy Builders)', description: 'Senior professionals & wisdom sharers' }
  ];

  const lifeCategories = [
    { value: 'students', label: 'Students', icon: '🎓' },
    { value: 'employees', label: 'Employees', icon: '💼' },
    { value: 'entrepreneurs', label: 'Entrepreneurs', icon: '🚀' },
    { value: 'solopreneurs', label: 'Solopreneurs', icon: '⚡' },
    { value: 'creatives', label: 'Creatives', icon: '🎨' },
    { value: 'parents', label: 'Parents', icon: '👨‍👩‍👧‍👦' },
    { value: 'retirees', label: 'Retirees', icon: '🌅' }
  ];

  const handleGenerateFtba = async () => {
    if (!selectedAge || !selectedCategory) return;
    
    setIsGenerating(true);
    // Simulate AI processing time for dramatic effect
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const content = generateFtbaContent(selectedAge, selectedCategory);
    setFtbaContent(content);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm font-medium px-4 py-2">
              Revolutionary Mindset Transformation
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">FTBA</span>
              <br />
              <span className="text-foreground">Methodology</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Transform your life through the power of <strong className="text-primary">Feel</strong>, <strong className="text-primary">Think</strong>, <strong className="text-primary">Believe</strong>, and <strong className="text-primary">Act</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-12">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>AI-Powered Personalization</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Psychology-Based Framework</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Instant Transformation Blueprint</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FTBA Explanation */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              The Science Behind <span className="gradient-text">Transformation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              FTBA isn't just another self-help method. It's a scientifically-backed framework that rewires your mind from the inside out, creating lasting change through precise psychological triggers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="motivation-card group hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  F
                </div>
                <CardTitle className="text-xl font-bold text-primary">FEEL</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Connect with your deepest emotions and desires. Emotional alignment is the foundation of all transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="motivation-card group hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  T
                </div>
                <CardTitle className="text-xl font-bold text-primary">THINK</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Rewire your mental patterns with empowering thoughts. Your mindset determines your reality.
                </p>
              </CardContent>
            </Card>

            <Card className="motivation-card group hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  B
                </div>
                <CardTitle className="text-xl font-bold text-primary">BELIEVE</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Adopt unshakeable beliefs that support your vision. Belief is the bridge between thoughts and reality.
                </p>
              </CardContent>
            </Card>

            <Card className="motivation-card group hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  A
                </div>
                <CardTitle className="text-xl font-bold text-primary">ACT</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Take aligned action that manifests your vision. Consistent action creates extraordinary results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Personalization Engine */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="motivation-card leadership-glow">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-4">
                Your Personalized <span className="gradient-text">FTBA Blueprint</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Get a custom-tailored transformation framework designed specifically for your life stage and goals.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Select Your Life Stage</label>
                  <Select value={selectedAge} onValueChange={setSelectedAge}>
                    <SelectTrigger className="h-12 bg-background/50 border-border hover:border-primary/50 transition-colors">
                      <SelectValue placeholder="Choose your age group..." />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {ageCategories.map((age) => (
                        <SelectItem key={age.value} value={age.value} className="hover:bg-primary/20">
                          <div>
                            <div className="font-medium">{age.label}</div>
                            <div className="text-xs text-muted-foreground">{age.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Select Your Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="h-12 bg-background/50 border-border hover:border-primary/50 transition-colors">
                      <SelectValue placeholder="Choose your role..." />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {lifeCategories.map((category) => (
                        <SelectItem key={category.value} value={category.value} className="hover:bg-primary/20">
                          <div className="flex items-center gap-2">
                            <span>{category.icon}</span>
                            <span className="font-medium">{category.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator className="bg-border/50" />

              <div className="text-center">
                <Button 
                  onClick={handleGenerateFtba}
                  disabled={!selectedAge || !selectedCategory || isGenerating}
                  className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-yellow-400 hover:from-primary/90 hover:to-yellow-400/90 text-background transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Generating Your Blueprint...
                    </div>
                  ) : (
                    'Generate My FTBA Blueprint'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FTBA Results */}
      {ftbaContent && (
        <div className="container mx-auto px-4 py-16">
          <FtbaDisplay content={ftbaContent} age={selectedAge} category={selectedCategory} />
        </div>
      )}

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform Your Life</span>?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Your personalized FTBA blueprint is just the beginning. The power to change your life lies in your commitment to consistent action.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 border-primary/30 text-primary">
              Psychology-Backed
            </Badge>
            <Badge variant="outline" className="px-4 py-2 border-primary/30 text-primary">
              Instantly Actionable
            </Badge>
            <Badge variant="outline" className="px-4 py-2 border-primary/30 text-primary">
              Scientifically Proven
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
