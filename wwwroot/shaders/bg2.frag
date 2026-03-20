#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float barSize = 0.16 + (0.0 - 0.16) * exp(-u_time * 0.5);

    vec3 colour = vec3(0.16);

    if ((barSize < uv.x && barSize < (1.0-uv.x)) || u_resolution.x < u_resolution.y) {
        float cellSize = 70.0;

        vec2 grid = floor(gl_FragCoord.xy / cellSize) * cellSize;

        vec2 gridCenter = grid + cellSize * 0.5;

        float d = distance(gridCenter, gl_FragCoord.xy);

        float radius = cellSize * 0.5 * (0.5 + 0.5 * sin((grid.x / 300.0) + u_time));

        if (d > radius) {
            colour -= 0.02;
        }
        if (d < radius + 2.0) {
            colour -= 0.03;
        }
    } else {
        colour *= 0.6;
    }

    gl_FragColor = vec4(colour, 1.0);
}