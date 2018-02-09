package org.dselent.course_load_scheduler.client.view.examples;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.TabLayoutPanel;

public class TabLayoutPanelExample extends Composite{

	private static TabLayoutPanelExampleUiBinder uiBinder = GWT.create(TabLayoutPanelExampleUiBinder.class);
	@UiField Button button1;
	@UiField TabLayoutPanel tabPanel;
	@UiField Button button2;
	@UiField Button button3;

	interface TabLayoutPanelExampleUiBinder extends UiBinder<Widget, TabLayoutPanelExample> {
	}

	public TabLayoutPanelExample() {
		initWidget(uiBinder.createAndBindUi(this));
	}

}
