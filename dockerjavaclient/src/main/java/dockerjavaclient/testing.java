package dockerjavaclient;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import com.github.dockerjava.api.DockerClient;
import com.github.dockerjava.api.model.Container;
import com.github.dockerjava.api.model.Image;
import com.github.dockerjava.core.DockerClientBuilder;

public class testing {
	public static void main(String args[]) {
		DockerClient dockerClient = DockerClientBuilder.getInstance().build();
		 List<Image> images = dockerClient.listImagesCmd().exec();

		for (int i = 0; i < images.size(); i++) {
			/*
			 * System.out.println(images.get(i));
			 */ }
		List<Container> containers = dockerClient.listContainersCmd().exec();
		Collections.sort(containers, new Comparator<Container>() {

			public int compare(Container o1, Container o2) {
				return (int) (o2.getCreated() - o1.getCreated());
			}
		});

		for (int i = 1; i < containers.size(); i++) {
			dockerClient.pauseContainerCmd(containers.get(i).getId()).exec();
		}
	}
}
