export default function SkillCard({ nama, level }) {
    return (
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-utama dark:text-white">{nama}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Level: {level}</p>
        </div>
    );
}