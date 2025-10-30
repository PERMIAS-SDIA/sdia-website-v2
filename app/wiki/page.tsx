import Footer from "@/components/footer";

export default function WikiPage() {
    return (
        <main>
            <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20">
                <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
                <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                    Wiki
                </h1>

                <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
                   Food spots, activities, apartments in San Diego, and more!
                </p>
                </div>
            </section>
            
            <Footer />
        </main>
    )
}