import React from 'react'



import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor() {
        super()


        this.state = {
            sections:[
                {
                  title: 'radnici',
                  imageUrl: 'https://thumbs.dreamstime.com/z/civil-engineer-construction-workers-characters-flat-design-civil-engineer-construction-workers-characters-flat-design-vector-116550575.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'parcele',
                  imageUrl: 'https://thumbs.dreamstime.com/b/agriculture-farming-agribusiness-rural-landscape-design-elements-info-graphic-websites-print-media-vector-illustration-114775513.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'poslovodje',
                  imageUrl: 'https://as2.ftcdn.net/jpg/01/18/63/53/500_F_118635335_b1oeJqPR5ADrPgSJZgTSc1wiZPr3QUgs.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
              {
                title: 'dnevnice',
                imageUrl: 'https://previews.123rf.com/images/stockgiu/stockgiu1806/stockgiu180600597/102599294-money-and-and-business-ideas-concept-vector-illustration-graphic-design.jpg',
                id: 4,
                linkUrl: 'shop/s'

              }]
        }
    }

    render() {


        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory