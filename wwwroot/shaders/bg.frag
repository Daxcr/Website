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

        float time = u_time - 0.4;
        if (time < 0.0){
            time == 0.0;
        }
        float angleEase = 3.14159 - (2.0 * 3.14159) * (1.0 - exp(-time * 0.6));
        float outlineSize = 0.1 + (1.0 - 0.1) * exp(-u_time * 0.5);

        float angle = atan(centeredCoord.y, centeredCoord.x);
        if (dist < circleSize * scale + (50.0 * outlineSize) && angle > angleEase) {
            colour *= 0.8;
        }
    }

    gl_FragColor = vec4(colour, 1.0);
}