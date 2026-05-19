import { useState } from "react";
import { Layout, Frame, HelpCircle, Code, Layers, Compass } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"maquet" | "iframe" | "questions">("maquet");

  const sections = [
    { id: "header", title: "HEADER", desc: "Задает вводную часть страницы или группу навигационных ссылок. Обычно содержит логотип, название сайта и главную панель навигации." },
    { id: "nav", title: "NAV", desc: "Предназначен для разделов, содержащих навигационные ссылки по сайту или текущей странице. Помогает поисковым роботам определять структуру меню." },
    { id: "article", title: "ARTICLE", desc: "Представляет собой независимый, самодостаточный фрагмент контента, который можно распространять отдельно (например, статья в блоге, новость или пост)." },
    { id: "section", title: "SECTION", desc: "Определяет тематический раздел документа. Обычно содержит заголовок и группирует логически связанный контент внутри страницы или статьи." },
    { id: "aside", title: "ASIDE", desc: "Размечает контент, который имеет косвенное отношение к основному содержимому (боковые панели, сайдбары, рекламные блоки, ссылки на архив)." },
    { id: "footer", title: "FOOTER", desc: "Определяет подвал страницы или раздела. Традиционно содержит информацию об авторе, авторских правах, ссылки на правила использования и контакты." }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans antialiased p-4 md:p-8 selection:bg-indigo-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Шапка проекта */}
        <header className="bg-white p-6 rounded-[2rem] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05),inset_0_-4px_6px_rgba(0,0,0,0.05)] border border-white mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Практическая работа №4</h1>
            <p className="text-xs font-semibold text-slate-400 mt-1">Студент: Ветров Т. С. | Группа: ИСИП-24-01-1 | Папка: Сайт2_Ветров</p>
          </div>
          
          <nav className="flex gap-2 bg-slate-100/80 p-2 rounded-2xl shadow-[inset_0_2px_5px_rgba(0,0,0,0.05)] border border-slate-200/50 w-full md:w-auto">
            {(["maquet", "iframe", "questions"] as const).map((tab) => {
              const label = tab === "maquet" ? "Макет" : tab === "iframe" ? "Встроенный фрейм" : "Вопросы";
              const Icon = tab === "maquet" ? Layout : tab === "iframe" ? Frame : HelpCircle;
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all w-full md:w-auto justify-center cursor-pointer ${
                    isActive
                      ? "bg-white text-indigo-600 shadow-[0_8px_16px_rgba(99,102,241,0.15),inset_0_-2px_4px_rgba(0,0,0,0.05)] transform -translate-y-0.5"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <Icon size={14} strokeWidth={2.5}/> {label}
                </button>
              );
            })}
          </nav>
        </header>

        {/* Контент: Макет (Задание 1) */}
        {activeTab === "maquet" && (
          <div className="space-y-6">
            {/* Глобальный NAV */}
            <nav className="bg-white p-4 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.03),inset_0_-3px_4px_rgba(0,0,0,0.02)] border border-slate-100">
              <span className="text-[10px] uppercase font-black text-indigo-500 tracking-wider block mb-2 font-mono">&lt;NAV&gt; Глобальные ссылки</span>
              <ul className="flex gap-6 text-sm font-bold">
                <li><a href="/glav" className="text-slate-600 hover:text-indigo-600 transition-colors">Главная</a></li>
                <li><a href="/blog" className="text-slate-600 hover:text-indigo-600 transition-colors">Блог</a></li>
                <li><a href="/contacts" className="text-slate-600 hover:text-indigo-600 transition-colors">Контакты</a></li>
              </ul>
            </nav>

            {/* Внутридокументный NAV */}
            <nav className="bg-white p-5 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.03),inset_0_-3px_4px_rgba(0,0,0,0.02)] border border-slate-100 sticky top-4 z-50 backdrop-blur-md bg-white/90">
              <span className="text-[10px] uppercase font-black text-emerald-500 tracking-wider block mb-3 font-mono">&lt;NAV&gt; Содержание страницы (Якоря)</span>
              <div className="flex flex-wrap gap-2">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className="px-4 py-2 bg-slate-50 hover:bg-white border border-slate-200/60 hover:border-indigo-200 text-xs font-bold font-mono text-slate-600 hover:text-indigo-600 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.02),inset_0_-2px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_14px_rgba(99,102,241,0.08)] transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    #{s.title}
                  </button>
                ))}
              </div>
            </nav>

            {/* Контейнер ARTICLE */}
            <article className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_15px_35px_rgba(0,0,0,0.04),inset_0_-4px_6px_rgba(0,0,0,0.02)] border border-slate-100/80 space-y-6">
              <header className="border-b border-slate-100 pb-4">
                <span className="text-[10px] uppercase font-black text-amber-500 tracking-wider block mb-1 font-mono">&lt;ARTICLE&gt;</span>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Статья о семантической структуре страницы</h2>
              </header>

              {/* Вертикальный стек (grid-cols-1) для четкой работы якорных ссылок */}
              <div className="grid grid-cols-1 gap-6">
                {sections.map((s) => (
                  <section
                    id={s.id}
                    key={s.id}
                    className="p-6 bg-slate-50/60 border border-slate-200/60 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.01),inset_0_-2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] hover:bg-white hover:border-slate-300 transition-all duration-300 scroll-mt-24 group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xs font-black font-mono text-indigo-600">&lt;SECTION id="{s.id}"&gt;</h3>
                      <span className="text-[10px] font-bold px-2.5 py-1 bg-slate-200/60 text-slate-600 rounded-md border border-slate-300/40 font-mono">{s.title}</span>
                    </div>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">{s.desc}</p>
                  </section>
                ))}
              </div>
            </article>

            {/* Подвал FOOTER */}
            <footer className="bg-white p-5 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold font-mono text-slate-400">
              <span>&lt;FOOTER&gt;</span>
              <span className="text-slate-600">© 2026 Ветров Тимофей Сергеевич | группа ИСИП-24-01-1</span>
              <span>&lt;/FOOTER&gt;</span>
            </footer>
          </div>
        )}

        {/* Контент: Фрейм (Задание 2) */}
        {activeTab === "iframe" && (
          <div className="space-y-6 bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-slate-100">
            <div className="border-b border-slate-100 pb-4 mb-4">
              <h2 className="text-xl font-black flex items-center gap-2 text-slate-900"><Layers className="text-indigo-500" size={20}/> Документ со встроенным фреймом</h2>
              <p className="text-xs font-semibold text-slate-400 mt-1">Демонстрация работы тега &lt;IFRAME&gt; с имитацией пропорций 50% ширины.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/2 space-y-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                  <h3 className="text-xs font-black text-slate-700 mb-2 flex items-center gap-1.5 uppercase font-mono"><Compass size={14} className="text-emerald-500"/> Описание разметки</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Фреймы позволяют встраивать сторонние веб-документы прямо в тело текущей страницы. Атрибут <code className="text-indigo-600 font-bold">src</code> задает путь к файлу, а параметры размеров могут выражаться как в пикселях, так и в процентах.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                  <h3 className="text-xs font-black text-slate-700 mb-2 flex items-center gap-1.5 uppercase font-mono"><Code size={14} className="text-indigo-500"/> Код вставки фрейма</h3>
                  <pre className="text-[11px] font-mono p-3.5 bg-slate-900 rounded-xl text-emerald-400 overflow-x-auto shadow-inner">
{`<IFRAME 
  src="Макет_Ветров.html" 
  width="50%" 
  height="480" 
  scrolling="yes">
</IFRAME>`}
                  </pre>
                </div>
              </div>

              <div className="lg:w-1/2 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-[inset_0_4px_8px_rgba(0,0,0,0.03)]">
                <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest mb-3">Рендер фрейма (width=50%)</span>
                
                <div className="w-full lg:w-[50%] border-4 border-white rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)] bg-white">
                  <div className="bg-slate-100 px-3 py-2 text-[10px] font-mono font-bold text-slate-400 border-b border-slate-200 flex justify-between items-center">
                    <span>Макет_Ветров.html</span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    </div>
                  </div>
                  <div className="h-[400px] overflow-y-scroll p-4 space-y-3 text-[11px]">
                    <div className="p-2 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-600 font-bold text-[10px]">🎯 NAV: Главная / Блог</div>
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                      <h4 className="font-bold text-slate-800 mb-0.5">&lt;H2&gt; Заголовок статьи</h4>
                      <p className="text-slate-400 text-[10px]">Семантическое наполнение страницы.</p>
                    </div>
                    {sections.map(s => (
                      <div key={s.id} className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">
                        <span className="font-mono font-bold text-emerald-600 text-[9px]">#{s.title}</span>
                        <p className="text-slate-400 text-[9px] mt-0.5 line-clamp-1">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Контент: Контрольные вопросы */}
        {activeTab === "questions" && (
          <div className="space-y-4">
            {[
              { q: "Какие теги используются для организации семантической структуры HTML-документа?", a: "Используются теги блочной структуры HTML5: <header>, <nav>, <main>, <article>, <section>, <aside> и <footer>. Они указывают поисковым роботам и браузерам на логическое назначение контента." },
              { q: "Что такое фреймы и для чего они используются?", a: "Фреймы — это изолированные области веб-страницы, способные загружать и отображать внутри себя независимые HTML-документы. Используются для интеграции сторонних виджетов, карт, плееров или разделения интерфейса." },
              { q: "Как в HTML-документ встроить фрейм?", a: "С помощью тега-контейнера <iframe>, указав путь к отображаемому файлу или внешнему сайту в обязательном атрибуте src." },
              { q: "Какими атрибутами обладает тег <IFRAME>?", a: "src (путь к документу), width (ширина фрейма), height (высота фрейма), scrolling (наличие полос прокрутки: yes/no/auto), name (имя фрейма для таргетинга ссылок) и sandbox (ограничения безопасности)." }
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-white border border-slate-100 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.02)]">
                <h3 className="font-black text-slate-900 mb-2 flex items-start gap-2 text-sm md:text-base">
                  <span className="text-indigo-500 font-mono">0{idx + 1}.</span> {item.q}
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed pl-6 border-l-2 border-slate-100">{item.a}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
