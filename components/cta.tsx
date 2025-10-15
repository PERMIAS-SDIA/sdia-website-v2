import Link from "next/link";
import { Button } from "./ui/button";

export default function CTA() {
    return (
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20">
            <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Ready to Be Part of Our Story?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
                Join us in celebrating Indonesian culture and building lifelong
                connections
            </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <a href="/events">
                    <Button
                    size="lg"
                    className="rounded-full bg-secondary-400 px-8 py-4 text-lg font-semibold text-secondary-900 shadow-lg transition-all duration-300 hover:bg-secondary-500 hover:shadow-xl"
                    >
                        See Upcoming Events
                    </Button>
                    </a>

                    <a href="/contact">
                    <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary-600"
                    >
                        Contact Us
                    </Button></a>
                    
                </div>
            </div>
        </section>
    )
}