import React from "react";
import { tvApi } from "../../api";
import TVPresenter from "./TVPresenter";


export default class extends React.Component {
    state = {
        topRated: null,
        airingToday: null,
        popular: null,
        error: null,
        loading: true
    };
    async componentDidMount() {
        try {
            const { data: { results: topRated } } = await tvApi.topRated();
            const { data: { results: airingToday } } = await tvApi.airingToday();
            const { data: { results: popular } } = await tvApi.popular();
            this.setState({
                topRated,
                airingToday,
                popular
            })
        } catch {
            this.setState({
                error: "Can't find Movies info."
            })
        } finally {
            this.setState({
                loading: false
            })

        }
    }

    render() {
        const { topRated, airingToday, popular, error, loading } = this.state;
        console.log(this.state);
        return <TVPresenter
            topRated={topRated}
            popular={popular}
            airingToday={airingToday}
            error={error}
            loading={loading}
        />
    }
}

