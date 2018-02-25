package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.Request;

public class ReceiveGetOwnRequestAction extends Action{
	private Request request;
	
	public ReceiveGetOwnRequestAction(Request request) {
		this.request = request;
	}
	
	public Request getGetOwnRequestInfo() {
		return request;
	}

	public void setRequest(Request request) {
		this.request = request;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(request);

		return sb.toString();
	}
}
