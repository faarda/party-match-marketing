import { Eyebrow, TextLink } from "@/components/ui";

export function HostsSection() {
  return (
    <section id="hosts" className="hosts-section section-space">
      <div className="page-width hosts-grid">
        <div>
          <Eyebrow>FOR THE PEOPLE WHO MAKE THE NIGHT</Eyebrow>
          <h2 className="font-heading">
            You bring
            <br />
            the <span className="pink-text">party.</span>
          </h2>
        </div>
        <div>
          <p className="lead-copy">
            From your friend’s birthday to the city’s regular Friday spot.
            There’s room for your kind of night.
          </p>
          <p>
            Everyday hosts can create a simple listing. Organizers and venues
            can apply for a verified profile, set up recurring weekly nights and
            update each date with its own DJ, theme or special guest.
          </p>
          <TextLink href="#waitlist">Be part of what’s coming</TextLink>
        </div>
      </div>
    </section>
  );
}
