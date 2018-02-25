package org.dselent.course_load_scheduler.client.action;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.Terms;

public class ReceiveGetTermsAction extends Action{
	private List<Terms> termsList;

	public ReceiveGetTermsAction() {
		termsList = null;
	}
	
	public ReceiveGetTermsAction(List<Terms> termsList) {
		this.termsList = termsList;
	}
	
	public List<Terms> getTerms() {
		return termsList;
	}

	public void setTerms(List<Terms> termsList) {
		this.termsList = termsList;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(termsList);

		return sb.toString();
	}
	

}
