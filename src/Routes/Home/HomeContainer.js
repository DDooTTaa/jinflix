import React from "react";
import { moviesApi } from "../../api.js";
import HomePresenter from "./HomePresenter.js";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upComing: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        try {
            const { data: { results: nowPlaying } } = await moviesApi.nowPlaying();
            const nowPlaying = (await moviesApi.nowPlaying()).data.results;
            const { data: { results: upComing } } = await moviesApi.upComing();
            const { data: { results: popular } } = await moviesApi.popular();
            this.setState({
                nowPlaying,
                upComing,
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
        const { nowPlaying, upComing, popular, error, loading } = this.state;
        console.log(this.state);
        return <HomePresenter
            nowPlaying={nowPlaying}
            upComing={upComing}
            popular={popular}
            error={error}
            loading={loading}
        />
    }
}