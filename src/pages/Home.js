import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductCategories from '../components/ProductCategories'
import Products from '../components/Products'

const Home = (props) => (
  <div>
    <h1 className="title">Welcome to Gousto React Coding Test</h1>
    <ProductCategories />
    <Products activeCategory={props.activeCategory} />
    <p>
      <button onClick={() => props.changePage()}>
        Go to About page via router
      </button>
    </p>
  </div>
)

// eslint-disable-next-line
const mapStateToProps = ({ home }) => ({
  activeCategory: home.activeCategory
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
