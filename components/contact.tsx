"use client";
import { Button } from '@/components/ui/button'

import { toast } from "sonner";

import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    Instagram,
    Twitter,
    Linkedin,
    Facebook
} from "lucide-react";
import { useState } from 'react';

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        value: "info@attinisourcing.com",
        description: "Send me a message anytime"
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+88019xxxxxxxx",
        description: "Call for urgent matters"
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Dhaka, Bangladesh",
        description: "Available globally"
    },
    {
        icon: Clock,
        title: "Hours",
        value: "Sun-Thu: 9AM-6PM",
        description: "Weekend sessions available"
    }
];

const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" }
];

export default function ContactSection() {
    const [isSubmitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {

        try {

            e.preventDefault();
            setSubmitting(true);

            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            const res = await fetch("/api/send-contact-message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                toast.success("Request sent successfully!");
                form.reset();
            } else {
                toast.error("Failed to send request. Please try again.");
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error("Failed to send request. Please try again.");
        } finally {
            setSubmitting(false);

        }
    };
    return (
        <section id='contact' className="w-full py-20 md:py-20">
            <div className="mx-auto max-w-6xl px-4 lg:px-0">
                <h1 className="mb-12 text-center text-primary/85 text-4xl font-montserrat font-semibold lg:text-5xl">Help us route your inquiry</h1>

                {/* <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h2 className="mb-3 text-lg font-semibold">Collaborate</h2>
                            <Link
                                href="mailto:hello@tailus.io"
                                className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                hello@tailus.io
                            </Link>
                            <p className="mt-3 text-sm">+243 000 000 000</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h3 className="mb-3 text-lg font-semibold">Press</h3>
                            <Link
                                href="mailto:press@tailus.io"
                                className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                press@tailus.io
                            </Link>
                            <p className="mt-3 text-sm">+243 000 000 000</p>
                        </div>
                    </div>
                </div> */}

                {/* <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div> */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left: Contact Form */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white/5 text-white placeholder:text-gray-300"
                                        placeholder="Your first name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white/5 text-white placeholder:text-gray-300"
                                        placeholder="Your last name"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white/5 text-white placeholder:text-gray-300"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white/5 text-white placeholder:text-gray-300"
                                    placeholder="+1 (555) 123-4567"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                                    Service Interest
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    defaultValue=""
                                    className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white/5 text-white"
                                    required
                                >
                                    <option value="" disabled className="text-gray-300">Choose a service you&apos;re interested in</option>
                                    <option value="free-assessment-call">Book a Free Assessment Call</option>
                                    <option value="personal-growth">Personal Growth</option>
                                    <option value="creative-consulting">Creative Consulting</option>
                                    <option value="life-coaching">Life Coaching</option>
                                    <option value="goal-setting">Goal Setting</option>
                                    <option value="personal-coaching">Personal Coaching</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none bg-white/5 text-white placeholder:text-gray-300"
                                    placeholder="Tell me about your goals and how I can help you..."
                                    required
                                ></textarea>
                            </div>


                            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>

                    {/* Right: Contact Info & Map */}
                    <div className="space-y-8">
                        {/* Contact Information */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info) => {
                                    const IconComponent = info.icon;
                                    return (
                                        <div key={info.title} className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                                <IconComponent className="w-6 h-6 text-background" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                                                <p className="text-primary font-medium mb-1">{info.value}</p>
                                                <p className="text-gray-300 text-sm">{info.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            className="w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors duration-300 group"
                                            aria-label={social.label}
                                        >
                                            <IconComponent className="w-6 h-6 text-white group-hover:text-background" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold text-white mb-6">Find Me</h3>
                            <div className="aspect-video rounded-xl overflow-hidden bg-gray-300">

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d228.26202675182472!2d90.38254212492735!3d23.740516471985753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1754153071987!5m2!1sen!2sbd"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Location Map"
                                ></iframe>
                            </div>
                            <p className="text-gray-300 text-sm mt-4 text-center">
                                Available for in-person sessions in New York and virtual coaching worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
