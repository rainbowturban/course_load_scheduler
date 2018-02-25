package org.dselent.course_load_scheduler.client.action;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.Frequency;

public class ReceiveGetFrequenciesAction extends Action{
	private List<Frequency> sectionList;

	public ReceiveGetFrequenciesAction() {
		sectionList = null;
	}
	
	public ReceiveGetFrequenciesAction(List<Frequency> sectionList) {
		this.sectionList = sectionList;
	}
	
	public List<Frequency> getSections() {
		return sectionList;
	}

	public void setSections(List<Frequency> sectionList) {
		this.sectionList = sectionList;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(sectionList);

		return sb.toString();
	}


	
}
