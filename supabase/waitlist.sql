-- Fresh waitlist table for Party Match.
-- Applied to the Catlog Supabase project, and to local docker for tests.

CREATE TABLE IF NOT EXISTS public.party_match_waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  parties text[] NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT party_match_waitlist_email_key UNIQUE (email),
  CONSTRAINT party_match_waitlist_location_check CHECK (location IN ('mainland', 'island')),
  CONSTRAINT party_match_waitlist_parties_check CHECK (cardinality(parties) >= 1)
);

CREATE INDEX IF NOT EXISTS party_match_waitlist_created_at_idx
  ON public.party_match_waitlist (created_at DESC);

ALTER TABLE public.party_match_waitlist ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.party_match_waitlist FROM anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.party_match_waitlist TO service_role;
