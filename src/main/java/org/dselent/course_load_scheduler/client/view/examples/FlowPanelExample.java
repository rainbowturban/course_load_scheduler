package org.dselent.course_load_scheduler.client.view.examples;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.FlowPanel;

public class FlowPanelExample extends Composite{

	private static FlowPanelExampleUiBinder uiBinder = GWT.create(FlowPanelExampleUiBinder.class);

	interface FlowPanelExampleUiBinder extends UiBinder<Widget, FlowPanelExample> {
	}

	public FlowPanelExample() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@UiField Button button1;
	@UiField Button button2;
	@UiField Button button3;
	@UiField Button button4;
	@UiField Button button5;
	@UiField Button button6;
	@UiField FlowPanel flowPanel;

	public FlowPanelExample(String firstName) {
		initWidget(uiBinder.createAndBindUi(this));
	}

}
