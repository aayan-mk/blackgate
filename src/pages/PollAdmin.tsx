import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  Lock,
  Unlock,
  RefreshCw,
  Search,
  Trash2,
  FileSpreadsheet,
  ArrowLeft,
  Users,
  Code2,
  ShieldAlert,
  Layers,
  KeyRound,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GlowCard } from '@/components/GlowCard';

interface PollResponse {
  id: number;
  name: string;
  phone: string;
  email: string;
  interest: 'Development' | 'VAPT' | 'Both';
  message: string | null;
  created_at: string;
}

export default function PollAdmin() {
  const [adminKey, setAdminKey] = useState(
    () => sessionStorage.getItem('blackgate_admin_key') || ''
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [responses, setResponses] = useState<PollResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [keyInput, setKeyInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Check existing session key on mount
  useEffect(() => {
    if (adminKey) {
      fetchResponses(adminKey);
    }
  }, [adminKey]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!keyInput.trim()) {
      setErrorMsg('Please enter the admin key.');
      return;
    }

    try {
      const res = await fetch('/api/poll/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: keyInput.trim() }),
      });

      if (!res.ok) {
        throw new Error('Invalid Admin Key. Please try again.');
      }

      sessionStorage.setItem('blackgate_admin_key', keyInput.trim());
      setAdminKey(keyInput.trim());
      setIsAuthenticated(true);
      fetchResponses(keyInput.trim());
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Authentication failed.');
    }
  };

  const fetchResponses = async (key: string) => {
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/poll/responses', {
        headers: {
          'x-admin-key': key,
        },
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        if (res.status === 401) {
          setIsAuthenticated(false);
          sessionStorage.removeItem('blackgate_admin_key');
          throw new Error('Session expired or invalid key.');
        }
        throw new Error(data.error || 'Failed to fetch responses.');
      }

      setIsAuthenticated(true);
      setResponses(data.responses || []);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Error fetching responses.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadCsv = () => {
    if (!adminKey) return;
    const downloadUrl = `/api/poll/export-csv?adminKey=${encodeURIComponent(adminKey)}`;
    window.location.href = downloadUrl;
  };

  const handleDelete = async (id: number) => {
    if (!confirm(`Are you sure you want to delete response #${id}?`)) return;

    try {
      const res = await fetch(`/api/poll/response/${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-key': adminKey },
      });

      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || 'Failed to delete response.');
      }

      setResponses((prev) => prev.filter((r) => r.id !== id));
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Delete failed.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('blackgate_admin_key');
    setAdminKey('');
    setIsAuthenticated(false);
    setResponses([]);
  };

  // Stats calculation
  const total = responses.length;
  const devCount = responses.filter((r) => r.interest === 'Development').length;
  const vaptCount = responses.filter((r) => r.interest === 'VAPT').length;
  const bothCount = responses.filter((r) => r.interest === 'Both').length;

  const filtered = responses.filter((r) => {
    const q = searchQuery.toLowerCase();
    return (
      r.name.toLowerCase().includes(q) ||
      r.email.toLowerCase().includes(q) ||
      r.phone.toLowerCase().includes(q) ||
      r.interest.toLowerCase().includes(q) ||
      (r.message && r.message.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen text-white bg-bg-primary py-10 px-4 sm:px-6 lg:px-8 selection:bg-accent-cyan/30">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Navbar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs text-text-secondary hover:text-white py-1.5 px-3 rounded-lg bg-white/5 border border-white/10 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-accent-cyan" />
              <span>Back Home</span>
            </Link>
            <span className="text-sm font-mono text-accent-cyan font-bold tracking-wider uppercase">
              Blackgate Poll Management Portal
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/survey"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-xs text-accent-cyan hover:underline"
            >
              <span>View Public Poll</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            {isAuthenticated && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-white/10 text-text-secondary hover:text-white h-8 text-xs"
              >
                <Unlock className="w-3.5 h-3.5 mr-1 text-red-400" />
                Sign Out
              </Button>
            )}
          </div>
        </div>

        {/* Not Authenticated View */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto pt-16">
            <GlowCard className="p-8 bg-bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl text-center space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-accent-cyan/15 border border-accent-cyan/40 flex items-center justify-center text-accent-cyan mx-auto shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                <Lock className="w-7 h-7" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Admin Authentication</h2>
                <p className="text-xs text-text-secondary">
                  Enter your Blackgate Admin Key to view submissions and download the response sheet.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <Input
                    type="password"
                    value={keyInput}
                    onChange={(e) => setKeyInput(e.target.value)}
                    placeholder="Enter Admin Key..."
                    className="pl-10 bg-bg-primary/80 border-white/10 text-white focus:border-accent-cyan h-11 text-sm rounded-xl"
                  />
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2 text-left">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-accent-cyan hover:bg-accent-teal text-bg-primary font-bold h-11 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  Unlock Dashboard
                </Button>
              </form>
            </GlowCard>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="space-y-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-text-secondary font-mono">Total Responses</div>
                  <div className="text-3xl font-black text-white mt-1">{total}</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/15 flex items-center justify-center text-accent-cyan">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-text-secondary font-mono">1. Development</div>
                  <div className="text-3xl font-black text-accent-cyan mt-1">{devCount}</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/15 flex items-center justify-center text-accent-cyan">
                  <Code2 className="w-5 h-5" />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-text-secondary font-mono">2. VAPT</div>
                  <div className="text-3xl font-black text-accent-teal mt-1">{vaptCount}</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-accent-teal/15 flex items-center justify-center text-accent-teal">
                  <ShieldAlert className="w-5 h-5" />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-text-secondary font-mono">3. Both</div>
                  <div className="text-3xl font-black text-purple-400 mt-1">{bothCount}</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, phone, email, or option..."
                  className="pl-10 bg-bg-primary border-white/10 text-white h-10 text-xs rounded-xl"
                />
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fetchResponses(adminKey)}
                  disabled={loading}
                  className="border-white/10 text-text-secondary hover:text-white h-10 text-xs"
                >
                  <RefreshCw className={`w-3.5 h-3.5 mr-1.5 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>

                <Button
                  onClick={handleDownloadCsv}
                  disabled={responses.length === 0}
                  className="bg-accent-cyan hover:bg-accent-teal text-bg-primary font-bold h-10 px-4 text-xs rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center gap-2 cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Download Excel/CSV Sheet</span>
                  <Download className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>

            {/* Responses Data Table */}
            <div className="rounded-2xl border border-white/10 bg-bg-card/40 backdrop-blur-xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5 text-text-secondary font-mono uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-semibold w-12">#</th>
                      <th className="py-3.5 px-4 font-semibold">Contact Info</th>
                      <th className="py-3.5 px-4 font-semibold">Phone</th>
                      <th className="py-3.5 px-4 font-semibold">Interest Option</th>
                      <th className="py-3.5 px-4 font-semibold">Note / Scope</th>
                      <th className="py-3.5 px-4 font-semibold">Date & Time</th>
                      <th className="py-3.5 px-4 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filtered.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="text-center py-12 text-text-muted">
                          {searchQuery ? 'No matching responses found.' : 'No responses collected yet.'}
                        </td>
                      </tr>
                    ) : (
                      filtered.map((item) => {
                        const badgeStyle =
                          item.interest === 'Development'
                            ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'
                            : item.interest === 'VAPT'
                            ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                            : 'bg-purple-500/15 text-purple-400 border-purple-500/30';

                        return (
                          <tr key={item.id} className="hover:bg-white/[0.03] transition-colors">
                            <td className="py-3.5 px-4 font-mono text-text-muted">{item.id}</td>
                            <td className="py-3.5 px-4">
                              <div className="font-semibold text-white">{item.name}</div>
                              <a
                                href={`mailto:${item.email}`}
                                className="text-accent-cyan hover:underline text-[11px]"
                              >
                                {item.email}
                              </a>
                            </td>
                            <td className="py-3.5 px-4">
                              <a
                                href={`tel:${item.phone}`}
                                className="font-mono text-text-secondary hover:text-white"
                              >
                                {item.phone}
                              </a>
                            </td>
                            <td className="py-3.5 px-4">
                              <span
                                className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${badgeStyle}`}
                              >
                                {item.interest}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 max-w-xs truncate text-text-secondary">
                              {item.message || <span className="text-text-muted italic">None</span>}
                            </td>
                            <td className="py-3.5 px-4 font-mono text-text-muted text-[11px]">
                              {new Date(item.created_at).toLocaleString()}
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <button
                                onClick={() => handleDelete(item.id)}
                                title="Delete entry"
                                className="p-1.5 rounded-lg text-text-muted hover:text-red-400 hover:bg-red-500/10 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>

              <div className="p-3 border-t border-white/10 bg-white/5 flex items-center justify-between text-[11px] text-text-muted font-mono">
                <span>Total records: {filtered.length} of {total}</span>
                <span>Database: data/poll.sqlite (Persistent)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
