"use client";
import { useState, useEffect, useRef } from "react";
import {
  Sparkles, Zap, Users, ArrowRight, Play, Send, MapPin,
  Briefcase, TrendingUp, Wallet, Star, DollarSign, Shield,
  BarChart3, Globe, Award, CheckCircle2, Building2, UserCheck,
  FileCheck, Target, Megaphone, Search,
} from "lucide-react";

type Audience = "creator" | "brand" | "agency";

interface PageConfig {
  trustLine: string;
  headline: React.ReactNode;
  ctaText: string;
  navLinks: { label: string; href: string }[];
  features: { title: string; subtitle: string; btnText: string; icon: React.ReactNode; visual: React.ReactNode }[];
  socialTitle: string;
  socialSubtitle: string;
  testimonials: { name: string; platform: string; followers: string; earned: string; quote: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
}

const configs: Record<Audience, PageConfig> = {
  creator: {
    trustLine: "Your followers are worth more than you think.",
    headline: <>Turn Your Influence<br /><em>Into Income.</em></>,
    ctaText: "Get Early Access",
    navLinks: [{ label: "For Brands", href: "/brand" }, { label: "For Agencies", href: "/agency" }],
    features: [
      {
        title: "Get paid to discover",
        subtitle: "Try new restaurants, test beauty products, explore fitness brands — and get paid for sharing your honest experience. No massive following needed.",
        btnText: "See Opportunities",
        icon: <Briefcase size={20} />,
        visual: (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", padding: 16 }}>
            {[
              { brand: "Nike MENA", type: "Product Unboxing", pay: "$250", tag: "UGC" },
              { brand: "Noon Daily", type: "15s Review Video", pay: "$80", tag: "Quick" },
              { brand: "Huda Beauty", type: "Tutorial Reel", pay: "$400", tag: "Beauty" },
            ].map((job, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: "#FAF7F2", borderRadius: 12, padding: "10px 14px", border: "1px solid #D5CFC5" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "#ECEAF2", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "#6B5B8A", flexShrink: 0 }}>{job.brand[0]}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{job.brand}</div>
                  <div style={{ fontSize: 11, color: "#8A8279" }}>{job.type}</div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#6B5B8A" }}>{job.pay}</div>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Know what you're worth",
        subtitle: "See what people like you are earning in your city and niche. No more guessing — know your value before you say yes.",
        btnText: "See Rates",
        icon: <TrendingUp size={20} />,
        visual: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#8A8279", textTransform: "uppercase" as const, letterSpacing: 0.5 }}>Your Estimated Rate</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: "#6B5B8A", letterSpacing: -1 }}>$320</div>
            <div style={{ fontSize: 12, color: "#8A8279" }}>per Instagram Reel</div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4, background: "#E4EDE4", padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, color: "#3D6B3D" }}>
              <TrendingUp size={12} /> +18% vs last quarter
            </div>
          </div>
        ),
      },
      {
        title: "Grow at your own pace",
        subtitle: "Start small, build your reputation, and unlock bigger opportunities as you go — from your first $50 gig to $5K+ brand partnerships.",
        btnText: "See How It Works",
        icon: <Award size={20} />,
        visual: (
          <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", padding: "12px 16px" }}>
            {["Explorer", "Creator", "Rising", "Pro", "Elite"].map((level, i) => (
              <div key={level} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 24, height: 24, borderRadius: 100, background: i <= 2 ? "linear-gradient(135deg, #6B5B8A, #1A1A1A)" : "#EDE8DF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {i <= 2 && <CheckCircle2 size={14} color="#FAF7F2" />}
                </div>
                <div style={{ flex: 1, fontSize: 13, fontWeight: i === 2 ? 700 : 400, color: i <= 2 ? "#1A1A1A" : "#8A8279" }}>{level}</div>
                <div style={{ fontSize: 11, color: "#8A8279" }}>{["$25-100", "$50-300", "$100-1K", "$500-5K", "$2K-50K"][i]}</div>
              </div>
            ))}
          </div>
        ),
      },
    ],
    socialTitle: "People just like you are getting started.",
    socialSubtitle: "No fame required. Just a phone and a willingness to try something new.",
    testimonials: [
      { name: "Fatima Al-Rashid", platform: "Instagram", followers: "1,200 followers", earned: "4,200", quote: "I started with 800 followers and got my first paid gig within a week. I just had to try a new café and share my experience." },
      { name: "Omar Hassan", platform: "TikTok", followers: "3,400 followers", earned: "8,500", quote: "I never thought of myself as a creator. But brands actually want real people, not just influencers. That blew my mind." },
      { name: "Sarah Chen", platform: "YouTube", followers: "850 subscribers", earned: "12,000", quote: "I review products I actually use. MyPR connects me with brands that want exactly that — honest opinions, not scripted ads." },
      { name: "Khalid Mahmoud", platform: "Instagram", followers: "5,000 followers", earned: "15,000", quote: "I get paid to try new restaurants and fitness products around Dubai. It honestly doesn't feel like work." },
    ],
    ctaTitle: "Your followers are worth more than you think.",
    ctaSubtitle: "Start getting paid to try, learn, and share — no experience needed.",
  },
  brand: {
    trustLine: "The fastest way to get authentic content from real people.",
    headline: <>Real Content.<br /><em>Real Results.</em></>,
    ctaText: "Book a Demo",
    navLinks: [{ label: "For Creators", href: "/" }, { label: "For Agencies", href: "/agency" }],
    features: [
      {
        title: "UGC without the hassle",
        subtitle: "Post a brief, set your budget, get authentic content from real people in days — not weeks. No agencies, no back-and-forth.",
        btnText: "Post a Brief",
        icon: <Megaphone size={20} />,
        visual: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: 16 }}>
            <div style={{ display: "flex", gap: -8, marginBottom: 4 }}>
              {[0,1,2,3,4].map(i => (
                <div key={i} style={{ width: 40, height: 40, borderRadius: 100, background: `hsl(${270 + i * 15}, 25%, ${65 - i * 5}%)`, border: "3px solid #FAF7F2", marginLeft: i > 0 ? -10 : 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Users size={16} color="#FAF7F2" />
                </div>
              ))}
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "#6B5B8A" }}>2,400+</div>
            <div style={{ fontSize: 12, color: "#8A8279" }}>Verified creators in GCC</div>
          </div>
        ),
      },
      {
        title: "Pay for results, not followers",
        subtitle: "Every rate is benchmarked against real deals. You pay market price for content that converts — not inflated influencer fees.",
        btnText: "See Pricing",
        icon: <BarChart3 size={20} />,
        visual: (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", padding: 16 }}>
            {[
              { niche: "Beauty", rate: "$280/reel", trend: "+12%" },
              { niche: "Food", rate: "$150/reel", trend: "+8%" },
              { niche: "Fitness", rate: "$220/reel", trend: "+15%" },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: "#FAF7F2", borderRadius: 12, padding: "10px 14px", border: "1px solid #D5CFC5" }}>
                <div style={{ flex: 1, fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{r.niche}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#6B5B8A" }}>{r.rate}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#3D6B3D", background: "#E4EDE4", padding: "2px 8px", borderRadius: 100 }}>{r.trend}</div>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Built-in compliance",
        subtitle: "Every creator is automatically license-verified for UAE and KSA. Compliance certificates generated with every deal — zero extra work on your end.",
        btnText: "Learn More",
        icon: <Shield size={20} />,
        visual: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: 16 }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(135deg, #6B5B8A, #1A1A1A)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Shield size={28} color="#FAF7F2" />
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", marginTop: 4 }}>Compliance Shield</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%" }}>
              {["UAE NMA License Verified", "KSA Mawthooq Verified", "Audit-Ready Certificates"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#3D6B3D" }}>
                  <CheckCircle2 size={14} color="#3D6B3D" /> {item}
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ],
    socialTitle: "Brands are getting better content for less.",
    socialSubtitle: "Authentic UGC that actually converts — at a fraction of the cost.",
    testimonials: [
      { name: "Ahmad Retail Group", platform: "E-commerce", followers: "50+ campaigns", earned: "120,000", quote: "We cut our cost per UGC asset by 60% and the content performs better than anything our agency produced." },
      { name: "Noon Marketing", platform: "Marketplace", followers: "200+ creators used", earned: "85,000", quote: "We post a brief and get 20+ authentic pieces of content back within days. It's the most efficient channel we have." },
      { name: "Dubai Fitness Co", platform: "Fitness", followers: "30+ campaigns", earned: "45,000", quote: "Finding real fitness enthusiasts in the UAE was impossible before. Now we have content from people who actually use our products." },
      { name: "Luxury Auto KSA", platform: "Automotive", followers: "15+ campaigns", earned: "200,000", quote: "We pay market price, every time. No inflated quotes, no guesswork — just results-driven content at scale." },
    ],
    ctaTitle: "The easiest way to get UGC that works.",
    ctaSubtitle: "Market-priced. Results-driven. Ready in days.",
  },
  agency: {
    trustLine: "Better deals and full transparency for your talent.",
    headline: <>Support Your Talent.<br /><em>Land Better Deals.</em></>,
    ctaText: "Request Access",
    navLinks: [{ label: "For Creators", href: "/" }, { label: "For Brands", href: "/brand" }],
    features: [
      {
        title: "Your entire roster, one dashboard",
        subtitle: "See every creator's performance, earnings, and availability at a glance. Less admin, more time supporting your talent.",
        btnText: "See Dashboard",
        icon: <Building2 size={20} />,
        visual: (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", padding: 16 }}>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { label: "Creators", value: "84" },
                { label: "Combined Reach", value: "12.4M" },
                { label: "Avg Rate", value: "$420" },
              ].map((s, i) => (
                <div key={i} style={{ flex: 1, background: "#FAF7F2", borderRadius: 12, padding: "10px 8px", textAlign: "center" as const, border: "1px solid #D5CFC5" }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#6B5B8A" }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: "#8A8279", fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "#FAF7F2", borderRadius: 12, padding: 12, border: "1px solid #D5CFC5" }}>
              <div style={{ fontSize: 11, color: "#8A8279", marginBottom: 6 }}>Agency Scorecard</div>
              <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 50 }}>
                {[40, 55, 35, 68, 50, 62, 45, 72, 58, 65].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, background: "linear-gradient(to top, #6B5B8A, #4A3D6B)", borderRadius: "3px 3px 0 0", opacity: 0.85 }} />
                ))}
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Find better deals, faster",
        subtitle: "Access a live marketplace of brand briefs. Match your talent to the right opportunities and negotiate with real market data behind you.",
        btnText: "Explore Deals",
        icon: <Search size={20} />,
        visual: (
          <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", padding: "12px 16px" }}>
            {[
              { brand: "Nike MENA", type: "UGC Campaign", budget: "$12K", match: "8 talent" },
              { brand: "Huda Beauty", type: "Product Launch", budget: "$25K", match: "14 talent" },
              { brand: "Noon Daily", type: "Review Series", budget: "$8K", match: "6 talent" },
            ].map((d, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: "#FAF7F2", borderRadius: 10, padding: "8px 12px", border: "1px solid #D5CFC5" }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "#ECEAF2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#6B5B8A" }}>{d.brand[0]}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{d.brand}</div>
                  <div style={{ fontSize: 10, color: "#8A8279" }}>{d.type} · {d.match}</div>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#6B5B8A" }}>{d.budget}</div>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Full transparency on every deal",
        subtitle: "Your creators see exactly what brands are paying. You see performance data and benchmarks. No hidden fees, no surprises — just trust.",
        btnText: "See How It Works",
        icon: <Target size={20} />,
        visual: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#8A8279", textTransform: "uppercase" as const }}>Your Agency vs Market</div>
            <div style={{ display: "flex", gap: 16, marginTop: 4 }}>
              <div style={{ textAlign: "center" as const }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#6B5B8A" }}>94%</div>
                <div style={{ fontSize: 10, color: "#8A8279" }}>Deal Close Rate</div>
              </div>
              <div style={{ width: 1, background: "#D5CFC5" }} />
              <div style={{ textAlign: "center" as const }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#6B5B8A" }}>+32%</div>
                <div style={{ fontSize: 10, color: "#8A8279" }}>vs Market Avg</div>
              </div>
            </div>
            <div style={{ marginTop: 4, fontSize: 12, fontWeight: 600, color: "#3D6B3D", background: "#E4EDE4", padding: "4px 12px", borderRadius: 100 }}>Top 5% of agencies on MyPR</div>
          </div>
        ),
      },
    ],
    socialTitle: "Agencies are landing bigger deals.",
    socialSubtitle: "Better opportunities for your talent. Less time on admin.",
    testimonials: [
      { name: "Gulf Talent Mgmt", platform: "Agency", followers: "45 creators managed", earned: "320,000", quote: "We landed three deals in the first month that we never would have found on our own. Our talent is thriving." },
      { name: "Stellar Agency", platform: "Agency", followers: "120 creators managed", earned: "580,000", quote: "The transparency changed everything. Our creators trust us more because they can see exactly what's happening." },
      { name: "MENA Creators Co", platform: "Agency", followers: "80 creators managed", earned: "420,000", quote: "We went from spending 60% of our time on admin to actually supporting our talent and finding them better work." },
      { name: "Palm Influence", platform: "Agency", followers: "35 creators managed", earned: "190,000", quote: "Our creators stay because we get them better deals. The market data makes negotiations so much easier." },
    ],
    ctaTitle: "Your talent deserves better deals.",
    ctaSubtitle: "Find opportunities, manage your roster, and build trust — all in one place.",
  },
};

// ─── Phone Mockup ────────────────────────────────────────────
function PhoneMockup({ audience }: { audience: Audience }) {
  const barHeights = [35, 55, 42, 68, 50, 62, 45, 58, 72, 48, 60, 52];

  if (audience === "brand") {
    return (
      <div className="phone-screen">
        <div className="phone-statusbar"><span style={{ fontSize: 12, fontWeight: 600 }}>9:41</span><div /></div>
        <div className="phone-hero-card">
          <div style={{ fontSize: 11, fontWeight: 600, opacity: 0.8, textTransform: "uppercase" as const, letterSpacing: 0.5, marginBottom: 4 }}>Campaign Performance</div>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.8 }}>24 Briefs Live</div>
          <div style={{ fontSize: 12, opacity: 0.8, marginTop: 2 }}>142 creator applications</div>
        </div>
        <div className="phone-stats-row">
          <div className="phone-stat"><div className="phone-stat-icon"><Search size={14} color="#6B5B8A" /></div><div className="phone-stat-num">2,400</div><div className="phone-stat-label">Creators</div></div>
          <div className="phone-stat"><div className="phone-stat-icon"><DollarSign size={14} color="#6B5B8A" /></div><div className="phone-stat-num">$82</div><div className="phone-stat-label">Avg Cost</div></div>
          <div className="phone-stat"><div className="phone-stat-icon"><Globe size={14} color="#6B5B8A" /></div><div className="phone-stat-num">6</div><div className="phone-stat-label">Markets</div></div>
        </div>
        <div className="phone-chart-card">
          <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", marginBottom: 12 }}>Content Delivered</div>
          <div className="phone-bar-chart">{barHeights.map((h, i) => <div key={i} className="phone-bar" style={{ height: `${h}%` }} />)}</div>
        </div>
        <div className="phone-bottomnav">
          <div className="phone-nav-item active"><Megaphone size={18} /><span>Briefs</span></div>
          <div className="phone-nav-item"><Users size={18} /><span>Creators</span></div>
        </div>
      </div>
    );
  }

  if (audience === "agency") {
    return (
      <div className="phone-screen">
        <div className="phone-statusbar"><span style={{ fontSize: 12, fontWeight: 600 }}>9:41</span><div /></div>
        <div className="phone-hero-card">
          <div style={{ fontSize: 11, fontWeight: 600, opacity: 0.8, textTransform: "uppercase" as const, letterSpacing: 0.5, marginBottom: 4 }}>Roster Value</div>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.8 }}>$2.4M</div>
          <div style={{ fontSize: 12, opacity: 0.8, marginTop: 2 }}>84 managed creators</div>
        </div>
        <div className="phone-stats-row">
          <div className="phone-stat"><div className="phone-stat-icon"><FileCheck size={14} color="#6B5B8A" /></div><div className="phone-stat-num">98%</div><div className="phone-stat-label">Compliant</div></div>
          <div className="phone-stat"><div className="phone-stat-icon"><TrendingUp size={14} color="#6B5B8A" /></div><div className="phone-stat-num">94%</div><div className="phone-stat-label">Close Rate</div></div>
          <div className="phone-stat"><div className="phone-stat-icon"><Star size={14} color="#6B5B8A" /></div><div className="phone-stat-num">Top 5%</div><div className="phone-stat-label">Ranked</div></div>
        </div>
        <div className="phone-chart-card">
          <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", marginBottom: 12 }}>Revenue This Quarter</div>
          <div className="phone-bar-chart">{barHeights.map((h, i) => <div key={i} className="phone-bar" style={{ height: `${h}%` }} />)}</div>
        </div>
        <div className="phone-bottomnav">
          <div className="phone-nav-item active"><Building2 size={18} /><span>Roster</span></div>
          <div className="phone-nav-item"><BarChart3 size={18} /><span>Analytics</span></div>
        </div>
      </div>
    );
  }

  // Creator (default)
  return (
    <div className="phone-screen">
      <div className="phone-statusbar"><span style={{ fontSize: 12, fontWeight: 600 }}>9:41</span><div /></div>
      <div className="phone-hero-card">
        <div style={{ fontSize: 11, fontWeight: 600, opacity: 0.8, letterSpacing: 0.5, textTransform: "uppercase" as const, marginBottom: 4 }}>New Opportunities</div>
        <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -0.8 }}>14 Near You</div>
        <div style={{ fontSize: 12, opacity: 0.8, marginTop: 2 }}>$4,280 earned so far</div>
      </div>
      <div className="phone-stats-row">
        <div className="phone-stat"><div className="phone-stat-icon"><Sparkles size={14} color="#6B5B8A" /></div><div className="phone-stat-num">14</div><div className="phone-stat-label">New Gigs</div></div>
        <div className="phone-stat"><div className="phone-stat-icon"><TrendingUp size={14} color="#6B5B8A" /></div><div className="phone-stat-num">Lvl 2</div><div className="phone-stat-label">Rising</div></div>
        <div className="phone-stat"><div className="phone-stat-icon"><Star size={14} color="#6B5B8A" /></div><div className="phone-stat-num">4.9</div><div className="phone-stat-label">Rating</div></div>
      </div>
      <div style={{ padding: "0 0 8px" }}>
        {[
          { brand: "Nike MENA", amount: "$250", type: "Try new running shoes" },
          { brand: "Noon", amount: "$180", type: "Review a gadget" },
          { brand: "Huda Beauty", amount: "$400", type: "Test a new skincare line" },
        ].map((job, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: "#FAF7F2", borderRadius: 14, padding: "10px 12px", border: "1px solid #D5CFC5", marginBottom: 6 }}>
            <div style={{ width: 32, height: 32, background: "#ECEAF2", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, color: "#6B5B8A" }}>{job.brand[0]}</div>
            <div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{job.brand}</div><div style={{ fontSize: 11, color: "#8A8279" }}>{job.type}</div></div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#6B5B8A" }}>{job.amount}</div>
          </div>
        ))}
      </div>
      <div className="phone-bottomnav">
        <div className="phone-nav-item active"><Sparkles size={18} /><span>Discover</span></div>
        <div className="phone-nav-item"><Wallet size={18} /><span>Earnings</span></div>
      </div>
    </div>
  );
}

// ─── Testimonial Card ────────────────────────────────────────
function TestimonialCard({ name, platform, followers, earned, quote }: {
  name: string; platform: string; followers: string; earned: string; quote: string;
}) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-video-placeholder">
        <div className="testimonial-play-icon"><Play size={24} fill="#FAF7F2" /></div>
        <div className="testimonial-earned-badge">${earned} Earned</div>
      </div>
      <p className="testimonial-quote">&ldquo;{quote}&rdquo;</p>
      <div className="testimonial-author"><strong>{name}</strong><span>{followers} on {platform}</span></div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────
export default function LandingPage({ audience = "creator" }: { audience?: Audience }) {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const config = configs[audience];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tiltProgress = Math.min(scrollY / 600, 1);
  const rotateX = 20 - tiltProgress * 20;
  const scale = 0.88 + tiltProgress * 0.12;

  return (
    <>
      <style>{styles}</style>

      <section className="hero-section" ref={heroRef}>
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />

        <nav className="navbar">
          <a href="/" className="nav-logo"><div className="nav-logo-icon">M</div>MyPR</a>
          <div className="nav-links">
            {config.navLinks.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
            <a href="#" className="nav-signup">{config.ctaText}</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="hero-trust">{config.trustLine}</p>
          <h1 className="hero-headline">{config.headline}</h1>
          <button className="hero-cta">{config.ctaText} <ArrowRight size={18} /></button>
        </div>

        <div className="phone-wrapper">
          <div className="phone-3d" style={{ transform: `rotateX(${rotateX}deg) scale(${scale})`, transformOrigin: "center top" }}>
            <div className="phone-inner"><PhoneMockup audience={audience} /></div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-header">
          <h2 className="features-title">
            {audience === "creator" && "Your social following is more valuable than you think."}
            {audience === "brand" && "The easiest way to get UGC — without the waste."}
            {audience === "agency" && "Everything your talent needs. Everything you need."}
          </h2>
          <p className="features-subtitle">
            {audience === "creator" && "Get paid to try new products, visit new places, and share what you love."}
            {audience === "brand" && "Post a brief, pay market price, get authentic content in days."}
            {audience === "agency" && "Better deals, full transparency, and less time on admin."}
          </p>
        </div>
        <div className="features-grid">
          {config.features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-card-icon">{f.icon}</div>
              <h3 className="feature-card-title">{f.title}</h3>
              <p className="feature-card-subtitle">{f.subtitle}</p>
              <div className="feature-card-visual">{f.visual}</div>
              <button className="feature-card-btn">{f.btnText}</button>
            </div>
          ))}
        </div>
      </section>

      <section className="social-proof-section">
        <h2 className="social-proof-title">{config.socialTitle}</h2>
        <p className="social-proof-subtitle">{config.socialSubtitle}</p>
        <div className="testimonials-grid">
          {config.testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">{config.ctaTitle}</h2>
        <p className="cta-subtitle">{config.ctaSubtitle}</p>
        <button className="cta-btn">{config.ctaText} <ArrowRight size={20} /></button>
      </section>

      <footer className="footer">
        <span>&copy; 2026 MyPR Inc.</span>
        <div className="footer-links"><a href="/terms">Terms</a><a href="/privacy">Privacy</a></div>
      </footer>
    </>
  );
}

const styles = `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --accent: #6B5B8A; --accent-soft: #ECEAF2; --gradient-start: #6B5B8A; --gradient-end: #1A1A1A;
  --bg: #f8f0e3; --surface: #FAF7F2; --surface-muted: #EDE8DF; --border: #D5CFC5;
  --text-primary: #1A1A1A; --text-muted: #8A8279; --white: #FAF7F2;
  --sans: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif;
  --serif: 'Georgia', serif;
}
body { font-family: var(--sans); color: var(--text-primary); overflow-x: hidden; background: var(--bg); -webkit-font-smoothing: antialiased; }

.hero-section { position: relative; min-height: 100vh; display: flex; flex-direction: column; align-items: center; overflow: hidden; padding-bottom: 80px;
  background: linear-gradient(180deg, #3D2E5C 0%, #4A3D6B 8%, #5A4D7A 18%, #6B5B8A 30%, #8A7DA4 45%, #B8AEC8 60%, #D8D0E0 75%, #E8E0D0 88%, #f8f0e3 100%); }
.hero-section::before { content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 120% 60% at 50% 5%, rgba(255,255,255,0.1) 0%, transparent 60%), radial-gradient(ellipse 80% 40% at 30% 70%, rgba(255,255,255,0.12) 0%, transparent 50%);
  pointer-events: none; z-index: 1; }
.hero-section > * { position: relative; z-index: 2; }

.cloud { position: absolute; background: rgba(255,255,255,0.08); border-radius: 50%; filter: blur(50px); z-index: 1; }
.cloud-1 { width: 500px; height: 200px; bottom: 5%; left: -5%; }
.cloud-2 { width: 400px; height: 160px; bottom: 8%; right: -3%; }
.cloud-3 { width: 600px; height: 180px; bottom: 2%; left: 30%; }

.navbar { width: 100%; max-width: 1200px; display: flex; align-items: center; justify-content: space-between; padding: 24px 32px; z-index: 10; }
.nav-logo { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 22px; color: var(--white); letter-spacing: -0.4px; text-decoration: none; }
.nav-logo-icon { width: 36px; height: 36px; background: var(--white); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--accent); font-weight: 800; font-size: 18px; box-shadow: 0 4px 16px rgba(0,0,0,0.12); }
.nav-links { display: flex; align-items: center; gap: 32px; }
.nav-links a { color: var(--white); text-decoration: none; font-size: 15px; font-weight: 500; opacity: 0.9; transition: opacity 0.2s; }
.nav-links a:hover { opacity: 1; }
.nav-signup { background: rgba(255,255,255,0.15) !important; backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.25); padding: 10px 24px; border-radius: 100px; font-weight: 600 !important; cursor: pointer; }
.nav-signup:hover { background: rgba(255,255,255,0.3) !important; }

.hero-content { text-align: center; padding: 48px 24px 0; max-width: 900px; }
.hero-trust { font-size: 15px; color: rgba(250,247,242,0.8); margin-bottom: 20px; font-weight: 500; }
.hero-headline { font-size: clamp(44px, 7vw, 82px); font-weight: 800; color: var(--white); line-height: 1.05; margin-bottom: 32px; letter-spacing: -2px; text-shadow: 0 2px 20px rgba(0,0,0,0.1); }
.hero-headline em { font-style: italic; font-family: var(--serif); font-weight: 400; letter-spacing: 0; }
.hero-cta { display: inline-flex; align-items: center; gap: 8px; padding: 16px 40px; background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end)); border: none; border-radius: 100px; color: var(--white); font-size: 17px; font-weight: 700; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 24px rgba(107,91,138,0.35); min-height: 56px; }
.hero-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(107,91,138,0.45); }

.phone-wrapper { width: 100%; max-width: 340px; margin: 48px auto 0; perspective: 1200px; padding: 0 24px; }
.phone-3d { border-radius: 44px; border: 6px solid #1A1A1A; background: #1A1A1A; box-shadow: 0 0 0 2px rgba(255,255,255,0.06), 0 20px 60px rgba(26,26,26,0.4), 0 60px 80px rgba(26,26,26,0.15); transition: transform 0.1s linear; position: relative; overflow: hidden; }
.phone-3d::before { content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 120px; height: 28px; background: #1A1A1A; border-radius: 0 0 16px 16px; z-index: 10; }
.phone-inner { border-radius: 38px; overflow: hidden; background: var(--bg); }
.phone-screen { min-height: 620px; padding: 48px 14px 0; position: relative; }
.phone-statusbar { display: flex; justify-content: space-between; align-items: center; padding: 0 8px 10px; color: #1A1A1A; }
.phone-hero-card { background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end)); color: #FAF7F2; padding: 18px; border-radius: 20px; margin-bottom: 12px; box-shadow: 0 8px 24px rgba(107,91,138,0.25); }
.phone-stats-row { display: flex; gap: 6px; margin-bottom: 12px; }
.phone-stat { flex: 1; background: #FAF7F2; border-radius: 14px; padding: 10px 6px; text-align: center; border: 1px solid var(--border); }
.phone-stat-icon { width: 26px; height: 26px; background: var(--accent-soft); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin: 0 auto 4px; }
.phone-stat-num { font-size: 14px; font-weight: 800; color: var(--text-primary); }
.phone-stat-label { font-size: 9px; color: var(--text-muted); font-weight: 500; margin-top: 1px; }
.phone-chart-card { background: #FAF7F2; border-radius: 14px; padding: 14px; border: 1px solid var(--border); margin-bottom: 12px; }
.phone-bar-chart { display: flex; align-items: flex-end; gap: 3px; height: 50px; }
.phone-bar { flex: 1; background: linear-gradient(to top, var(--accent), #4A3D6B); border-radius: 3px 3px 0 0; opacity: 0.85; }
.phone-bottomnav { display: flex; background: #FAF7F2; border-top: 1px solid var(--border); margin: 0 -14px; padding: 10px 0 28px; }
.phone-nav-item { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px; font-size: 10px; font-weight: 600; color: var(--text-muted); }
.phone-nav-item.active { color: var(--accent); }

.features-section { padding: 100px 24px 80px; max-width: 1200px; margin: 0 auto; }
.features-header { text-align: left; margin-bottom: 16px; }
.features-title { font-size: clamp(28px, 4vw, 44px); font-weight: 800; color: var(--text-primary); line-height: 1.15; margin-bottom: 12px; letter-spacing: -0.8px; }
.features-subtitle { font-size: 17px; color: var(--text-muted); margin-bottom: 48px; }
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.feature-card { background: var(--surface); border-radius: 20px; padding: 28px 24px; border: 1px solid var(--border); transition: all 0.3s; }
.feature-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(26,26,26,0.06); }
.feature-card-icon { width: 40px; height: 40px; background: var(--accent-soft); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--accent); margin-bottom: 16px; }
.feature-card-title { font-size: 20px; font-weight: 700; margin-bottom: 6px; color: var(--text-primary); letter-spacing: -0.3px; }
.feature-card-subtitle { font-size: 14px; color: var(--text-muted); margin-bottom: 20px; line-height: 1.5; }
.feature-card-visual { min-height: 180px; background: var(--surface-muted); border-radius: 14px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.feature-card-btn { width: 100%; padding: 14px; border-radius: 100px; border: none; background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end)); color: #FAF7F2; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.3s; min-height: 48px; }
.feature-card-btn:hover { box-shadow: 0 6px 20px rgba(107,91,138,0.3); }

.social-proof-section { padding: 80px 24px; text-align: center; max-width: 1200px; margin: 0 auto; }
.social-proof-title { font-size: clamp(28px, 4vw, 44px); font-weight: 800; margin-bottom: 12px; letter-spacing: -0.8px; }
.social-proof-subtitle { font-size: 17px; color: var(--text-muted); margin-bottom: 48px; }
.testimonials-grid { display: flex; gap: 24px; overflow-x: auto; padding-bottom: 16px; scroll-snap-type: x mandatory; }
.testimonials-grid::-webkit-scrollbar { display: none; }
.testimonial-card { min-width: 280px; max-width: 280px; scroll-snap-align: start; text-align: left; }
.testimonial-video-placeholder { width: 100%; height: 340px; border-radius: 20px; background: linear-gradient(145deg, #4A3D6B, #1A1A1A); position: relative; overflow: hidden; margin-bottom: 14px; display: flex; align-items: center; justify-content: center; }
.testimonial-video-placeholder::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.4), transparent 50%); }
.testimonial-play-icon { width: 48px; height: 48px; background: rgba(250,247,242,0.12); backdrop-filter: blur(8px); border-radius: 50%; display: flex; align-items: center; justify-content: center; z-index: 2; }
.testimonial-earned-badge { position: absolute; bottom: 14px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end)); color: #FAF7F2; padding: 8px 24px; border-radius: 100px; font-weight: 700; font-size: 14px; z-index: 3; white-space: nowrap; }
.testimonial-quote { font-size: 14px; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px; min-height: 60px; }
.testimonial-author { display: flex; flex-direction: column; gap: 2px; }
.testimonial-author strong { font-size: 14px; color: var(--text-primary); }
.testimonial-author span { font-size: 12px; color: var(--text-muted); }

.cta-section { text-align: center; padding: 80px 24px 100px; }
.cta-title { font-size: clamp(28px, 4.5vw, 48px); font-weight: 800; margin-bottom: 12px; letter-spacing: -0.8px; }
.cta-subtitle { font-size: 17px; color: var(--text-muted); margin-bottom: 32px; }
.cta-btn { display: inline-flex; align-items: center; gap: 8px; padding: 18px 48px; background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end)); color: #FAF7F2; border: none; border-radius: 100px; font-size: 18px; font-weight: 700; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 24px rgba(107,91,138,0.25); min-height: 56px; }
.cta-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 36px rgba(107,91,138,0.4); }

.footer { padding: 28px 24px; border-top: 1px solid var(--border); color: var(--text-muted); font-size: 13px; display: flex; justify-content: space-between; max-width: 1200px; margin: 0 auto; }
.footer-links { display: flex; gap: 24px; }
.footer-links a { color: var(--text-muted); text-decoration: none; }
.footer-links a:hover { color: var(--text-primary); }

@media (max-width: 900px) {
  .features-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
  .navbar { padding: 16px 20px; }
  .nav-links a:not(.nav-signup) { display: none; }
  .footer { flex-direction: column; gap: 12px; align-items: center; }
}
`;
