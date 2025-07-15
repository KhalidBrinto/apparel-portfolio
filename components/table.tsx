import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const tabledata = [
    {
        id: 1,
        feature: "Sampling Speed",
        ours: "🚀 7–10 days",
        players: "🐢 21–30 days",

    },
    {
        id: 2,
        feature: "MOQ",
        ours: "✅ 300 pcs/style",
        players: "❌ 1000+ pcs/style",

    },
    {
        id: 3,
        feature: "Flexibility",
        ours: "🔁 High",
        players: "⚠️ Low (mass production focused)",

    },
    {
        id: 4,
        feature: "Trend Support",
        ours: "🎨 In-house design & development",
        players: "❌ Buyer-dependent",

    },
    {
        id: 5,
        feature: "Transparency",
        ours: "👁️ Direct visibility, pricing, QC",
        players: "🔒 Layered process",

    },
    {
        id: 6,
        feature: "Startup Friendly",
        ours: "🤝 Yes",
        players: "❌ No",

    },
    {
        id: 7,
        feature: "Factory Control",
        ours: "📍Buyer-focused",
        players: "🏢 Factory-focused",

    },
    {
        id: 8,
        feature: "Tech Packs / Branding",
        ours: "🧵 Supported",
        players: "❌ Not included",

    },
    {
        id: 9,
        feature: "Digital Process",
        ours: "📲 Live production updates",
        players: "📄 Manual reports",

    },
    {
        id: 10,
        feature: "Visual Impact",
        ours: "📸 Sample videos, lookbooks",
        players: "🧾 Traditional catalogs",

    },
]

export function TableDemographics() {
    return (

        <section className="py-32">
            <div className="max-w-5xl mx-auto px-4 space-y-24">
                <div className="text-center">
                    <h2 className="text-balance mb-4 text-4xl font-semibold lg:text-5xl">Our Edge Over the Industry Giants</h2>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center lg:text-xl py-6">Featrue</TableHead>
                            <TableHead className="text-center lg:text-xl py-6">Our Buying House</TableHead>
                            <TableHead className="text-center lg:text-xl py-6">Traditional Players</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tabledata.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell className="py-8 text-center">{row.feature}</TableCell>
                                <TableCell className="font-medium py-8 text-center">{row.ours}</TableCell>
                                <TableCell className="py-8 text-center">{row.players}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        </section>

    )
}
