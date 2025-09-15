"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/hooks/use-locale"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, MessageCircle, HeadphonesIcon } from "lucide-react"

export default function ContactPage() {
  const { t } = useLocale()

  const contactMethods = [
    {
      icon: Mail,
      title: t.contact.methods.email.title,
      description: t.contact.methods.email.description,
      contact: "support@healthhub.com",
      action: t.contact.methods.email.action,
    },
    {
      icon: Phone,
      title: t.contact.methods.phone.title,
      description: t.contact.methods.phone.description,
      contact: "+1 (555) 123-4567",
      action: t.contact.methods.phone.action,
    },
    {
      icon: MessageCircle,
      title: t.contact.methods.chat.title,
      description: t.contact.methods.chat.description,
      contact: "Available 9 AM - 6 PM EST",
      action: t.contact.methods.chat.action,
    },
    {
      icon: HeadphonesIcon,
      title: t.contact.methods.consultation.title,
      description: t.contact.methods.consultation.description,
      contact: t.contact.methods.consultation.contact,
      action: t.contact.methods.consultation.action,
    },
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: t.contact.office.main,
      details: ["123 Health Street", "Medical District", "New York, NY 10001"],
    },
    {
      icon: Clock,
      title: t.contact.office.hours,
      details: ["Monday - Friday: 9 AM - 6 PM", "Saturday: 10 AM - 4 PM", "Sunday: Closed"],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-3xl sm:text-4xl font-bold tracking-tight font-sans lg:text-5xl">
                {t.contact.title}
              </h1>
              <p className="mb-8 text-base sm:text-lg text-muted-foreground font-serif leading-relaxed lg:text-xl">
                {t.contact.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight font-sans lg:text-4xl">
                {t.contact.methods.title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-serif">{t.contact.methods.subtitle}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16 max-w-6xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-sans">{method.title}</CardTitle>
                    <CardDescription className="font-serif">{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium mb-4">{method.contact}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Office Info */}
            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-sans">{t.contact.form.title}</CardTitle>
                  <CardDescription className="font-serif">{t.contact.form.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t.contact.form.firstName}</Label>
                      <Input id="firstName" placeholder={`Enter your ${t.contact.form.firstName.toLowerCase()}`} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t.contact.form.lastName}</Label>
                      <Input id="lastName" placeholder={`Enter your ${t.contact.form.lastName.toLowerCase()}`} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.form.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={`Enter your ${t.contact.form.email.toLowerCase()} address`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t.contact.form.subject}</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.form.message}</Label>
                    <Textarea id="message" placeholder={t.contact.form.messagePlaceholder} className="min-h-[120px]" />
                  </div>
                  <Button className="w-full">{t.contact.form.send}</Button>
                </CardContent>
              </Card>

              {/* Office Information */}
              <div className="space-y-6">
                {officeInfo.map((info, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="font-sans">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground font-serif">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Map Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-sans">{t.contact.office.findUs}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-primary/30" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight font-sans lg:text-4xl">
                {t.contact.faq.title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-serif">{t.contact.faq.subtitle}</p>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-sans">{t.contact.faq.questions.response.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-serif">{t.contact.faq.questions.response.answer}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-sans">{t.contact.faq.questions.consultation.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-serif">{t.contact.faq.questions.consultation.answer}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-sans">{t.contact.faq.questions.support.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-serif">{t.contact.faq.questions.support.answer}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
