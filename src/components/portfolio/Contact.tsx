import { Mail, Phone, Linkedin, MapPin, Github, FileText } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91-7978417307",
      href: "tel:+917978417307",
    },
   {
  icon: <Mail className="w-5 h-5" />,
  label: "Email",
  value: "b323025@iiit-bh.ac.in",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=b323025@iiit-bh.ac.in",
}
,
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/pratham-pratap-singh-1b1b73246/",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bhubaneswar, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="glass-card rounded-xl p-5 flex items-center gap-4 hover:border-primary/50 transition-colors">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a 
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-medium hover:text-primary transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium truncate">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="glass-card rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-lg font-semibold mb-3">Let's Connect!</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              I'm actively seeking internship and full-time opportunities. 
              Feel free to reach out via email or connect on LinkedIn.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=b323025@iiit-bh.ac.in"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border font-medium hover:bg-secondary transition-colors"
>
  <Mail className="w-4 h-4" />
  Email Me
</a>

              <a 
                href="https://www.linkedin.com/in/pratham-pratap-singh-1b1b73246/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border font-medium hover:bg-secondary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border font-medium hover:bg-secondary transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
