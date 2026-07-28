"use client";

import AboutHero from "./AboutHero";
import ScrollProgress from "./ScrollProgress";
import Journey from "./Journey";
import TurningPoints from "./TurningPoints";
import EvolutionTree from "./EvolutionTree";
import FirstSpark from "./FirstSpark";
import ProgrammingJourney from "./ProgrammingJourney";
import CreativeMind from "./CreativeMind";
import EngineeringLab from "./EngineeringLab";
import MissionControl from "./MissionControl";

export default function AboutPage() {
    return (
        <main className="bg-[var(--background)] text-[var(--text-color)]">

            <ScrollProgress />

            <AboutHero />

            <Journey />

            <FirstSpark />

            <ProgrammingJourney />

            <CreativeMind />

            <TurningPoints />

            <EngineeringLab />

            <MissionControl />

            <EvolutionTree />

        </main>
    );
}