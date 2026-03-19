#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTextureCoord;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec3 colour = vec3(0.16);

    vec2 centeredCoord = gl_FragCoord.xy - (u_resolution.xy * 0.5);
    float dist = length(centeredCoord);

    float circleSize = 0.64 + (2.0 - 0.64) * exp(-u_time * 0.5);

    float scale = 0.36 * u_resolution.x;
    if (scale < 500.0){
        scale = 500.0;
    }

    if (dist < circleSize * scale) {

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