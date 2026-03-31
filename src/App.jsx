import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedTools from './components/FeaturedTools'
import ToolsGrid from './components/ToolsGrid'
import TrendingSection from './components/TrendingSection'
import SubmitTool from './components/SubmitTool'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import { tools, CATEGORIES } from './data/tools'
import './index.css'

export default function App() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [filterPricing, setFilterPricing] = useState('All')
  const [filterTrending, setFilterTrending] = useState(false)

  const filtered = tools.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
    const matchCat = activeCategory === 'All' || t.category === activeCategory
    const matchPrice = filterPricing === 'All' || t.pricing === filterPricing
    const matchTrend = !filterTrending || t.trending
    return matchSearch && matchCat && matchPrice && matchTrend
  })

  return (
    <div style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <Navbar onSearch={setSearch} search={search} />
      <Hero search={search} setSearch={setSearch} />
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        filterPricing={filterPricing}
        setFilterPricing={setFilterPricing}
        filterTrending={filterTrending}
        setFilterTrending={setFilterTrending}
      />
      <FeaturedTools />
      <ToolsGrid tools={filtered} />
      <TrendingSection />
      <SubmitTool />
      <Newsletter />
      <Footer />
    </div>
  )
}
