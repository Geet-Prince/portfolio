export const codeSnippets: readonly string[] = [
`@RestController
@RequestMapping("/api/music")
public class MusicController {

    @GetMapping("/songs")
    public ResponseEntity<List<Song>> getSongs() {
        return ResponseEntity.ok(service.findAll());
    }

}`,
`class JamSessionManager(
    private val firebase: FirebaseDatabase
) {

    suspend fun syncPlayback() {
        // Synchronizing stream...
        firebase.sync()
    }

}`,
`@app.route("/api/analytics")
def analytics():
    stats = fetch_user_stats()
    return jsonify(stats)`
];
