export function Title({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <div className="flex items-center">
            <h1 className="text-3xl font-semibold">[{title}]</h1>
            <h2 className="text-3xl">{subtitle}</h2>
        </div>
    );
}
