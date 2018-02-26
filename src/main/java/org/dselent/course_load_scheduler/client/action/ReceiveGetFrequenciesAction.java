package org.dselent.course_load_scheduler.client.action;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.Frequency;

public class ReceiveGetFrequenciesAction extends Action{
	private List<Frequency> freqList;

	public ReceiveGetFrequenciesAction() {
		freqList = null;
	}
	
	public ReceiveGetFrequenciesAction(List<Frequency> freqList) {
		this.freqList = freqList;
	}
	
	public List<Frequency> getFrequencies() {
		return freqList;
	}

	public void setFrequencies(List<Frequency> freqList) {
		this.freqList = freqList;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(freqList);

		return sb.toString();
	}


	
}
