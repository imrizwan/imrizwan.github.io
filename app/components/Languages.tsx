import { BiGlobe } from 'react-icons/bi';

export default function Languages() {
    const languages = [
        { language: "English", proficiency: "Full Professional Proficiency" },
        { language: "Urdu/Hindi", proficiency: "Native or Bilingual Proficiency" }
    ];
  
    return (
        <section className="px-6 py-12">
            <h2 className="text-4xl font-bold mb-4"><BiGlobe className="inline-block mr-2"/> Languages</h2>
            <div className="grid grid-cols-2 gap-4">
                {languages.map((language, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-xl font-bold">{language.language}</p>
                        <p className="text-gray-500">{language.proficiency}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
