import { ProgramCard } from "../components/ProgramCard/ProgramCard";

export default function mapProgramsResult<TdataType>(data: TdataType | any, loading: boolean): any {
    if (data) {
        return data?.results.map((e: any) => <ProgramCard
            loading={loading}
            id={e.id}
            mediaType={e.media_type}
            overview={e.overview}
            popularity={e.popularity}
            posterPath={e.poster_path}
            title={e.title}
            key={e.id} />)
    }
}