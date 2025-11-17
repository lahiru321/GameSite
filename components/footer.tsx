"use client"

import Link from 'next/link'
import { Github, Twitter, Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-muted/5 py-16 md:py-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl spotlight opacity-20" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="font-bold text-primary-foreground text-sm">GV</span>
              </div>
              <span className="font-bold">GameVault</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Premium gaming products with crypto payment solutions for the modern gamer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-foreground/60 hover:text-foreground transition">Home</a></li>
              <li><a href="#about" className="text-foreground/60 hover:text-foreground transition">About</a></li>
              <li><Link href="/store" className="text-foreground/60 hover:text-foreground transition">Products</Link></li>
              <li><a href="#contact" className="text-foreground/60 hover:text-foreground transition">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition">Documentation</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition">Help Center</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition">FAQ</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition">Blog</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 text-foreground/60 hover:text-primary transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 text-foreground/60 hover:text-primary transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 text-foreground/60 hover:text-primary transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 text-foreground/60 hover:text-primary transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-foreground/60">
          <p>© 2025 GameVault. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
